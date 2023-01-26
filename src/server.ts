var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
import createTorrent from "create-torrent";
import fs from "fs";

createTorrent(
  "/home/jadson/Downloads/glock.blend",
  {
    urlList: ["http://192.168.6.29:3000/file"],
    pieceLength: 32 * 1000000, // MB
  },
  (err, torrent) => {
    if (!err) {
      // `torrent` is a Buffer with the contents of the new .torrent file

      fs.writeFileSync("/home/jadson/desktop/webseed/glock.torrent", torrent);
    }
  }
);

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

/*
app.use(function (req, res, next) {
  console.log(req.url);

  res.end();
});
*/

app.get("/file", (req, res) => {
  console.log("TESTE /file");
  console.log(req.headers);
  const filePath = `/home/jadson/Downloads/glock.blend`;
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    //Mais de um bloco
    console.log("range", range);
    const parts = range.replace(/bytes=/, "").split("-");
    console.log("parts", parts);
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "application/octet-stream",
    });

    console.log({
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Content-Length": chunksize,
    });

    file.pipe(res);
  } else {
    console.log("else range");
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "application/octet-stream",
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

export default app

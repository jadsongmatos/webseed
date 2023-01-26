
2^14)/1024 = 16kb
2^18)/1024 = 256kb
2^24)/1024)/1024 = 16mb

https://en.wikipedia.org/wiki/BitTorrent#Web_seeding
http://wiki.vuze.com/w/HTTP_Seeding

/?info_hash=1%d3%a1%ee%7d%dd%93Ht%eeRP%2c%afWd%9b%8b%bc%09&peer_id=-qB4500-hQjR_KROcm8i&port=2191&uploaded=0&downloaded=0&left=604&corrupt=0&key=3F2D39C9&event=started&numwant=200&compact=1&no_peer_id=1&supportcrypto=1&redundant=0

info_hash
peer_id -qB4500-hQjR_KROcm8i
port 2191
uploaded 0
downloaded 0
left 604
corrupt 0
key 3F2D39C9
event started
numwant 200
compact 1
no_peer_id 1
supportcrypto 1
redundant 0



info_hash: the SHA-1 hash of the torrent file's metadata
peer_id: a unique ID identifying the client
port: the port number that the client is listening on for incoming connections
uploaded: the number of bytes the client has uploaded to other peers
downloaded: the number of bytes the client has downloaded from other peers
left: the number of bytes the client still needs to download
corrupt: the number of bytes that have been received but are corrupt
key: a unique key that helps to prevent against certain types of denial-of-service attacks
event: the current state of the client (e.g. "started", "stopped", "completed")
numwant: the number of peers the client would like to receive in the tracker's response
compact: a flag indicating whether the client supports compact peer lists
no_peer_id: a flag indicating whether the client wants the peer ID to be included in the tracker's response
supportcrypto: a flag indicating whether the client supports encrypted connections
redundant: any additional data that the client wants to send to the tracker.

import express from 'express';

let server = express();

server.use(express.static('client'));

server.listen(8080);
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 3001;
const cors = require('cors');
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})


app.use(cors());

server.listen(PORT, () => console.log('listening on port...'))

// Imports
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

require('./config/config');

const app = express();
let server = http.createServer(app);

// IO -> socket
module.exports.io = socketIO(server);
require('./socket/chat');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});

app.get("/", (req, res) => {
    res.redirect(process.env.REDIRECT);
});

server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);

    console.log('Servidor montado en el puerto ' + process.env.PORT);
;})
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ['POST', "GET"]
    }
})

const getReceiverSocketId = (receiverId) => {
    return onlineFriendsMap[receiverId]
}

const onlineFriendsMap = {}

io.on('connection', (socket) => {
    console.log('user is connected', socket.id);

    const onlineUser = socket.handshake.query.userId;

    if (onlineUser) {
        onlineFriendsMap[onlineUser] = socket.id;
    }

    io.emit('onlineFriends', Object.keys(onlineFriendsMap));

    socket.on('disconnect', () => {
        console.log('user Disconnected', socket.id);
        delete onlineFriendsMap[onlineUser];
        io.emit('onlineFriends', Object.keys(onlineFriendsMap));

    })
})

module.exports = { app, io, server, getReceiverSocketId }
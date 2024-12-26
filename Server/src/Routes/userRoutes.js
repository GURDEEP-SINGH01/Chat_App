const express = require('express');
const routes = express.Router();

const userController = require('../Controller/userController');
const messageController = require('../Controller/messagesController');

routes.post('/signup', userController.signUp);
routes.post('/signin', userController.signIn);

routes.post('/sendMessage', messageController.sendMessages);
routes.get('/getMessage', messageController.getMessages);

module.exports = routes;
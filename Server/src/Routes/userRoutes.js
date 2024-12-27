const express = require('express');
const routes = express.Router();

const userController = require('../Controller/userController');
const authController = require('../Controller/authController');
const messageController = require('../Controller/messagesController');

routes.post('/signup', authController.signUp);
routes.post('/signin', authController.signIn);

routes.post('/addFriends', userController.addFriends);
routes.get('/getFriends', userController.getFriends);

routes.post('/sendMessage', messageController.sendMessages);
routes.get('/getMessage', messageController.getMessages);

module.exports = routes;
const express = require('express');
const routes = express.Router();

const userController = require('../Controller/userController');
const authController = require('../Controller/authController');
const messageController = require('../Controller/messagesController');
const { protectedRoutes } = require('../middleware/protectdRoutes');

routes.post('/signup', authController.signUp);
routes.post('/signin', authController.signIn);
routes.post('/signout', authController.signOut);


routes.post('/addFriends', userController.addFriends);
routes.get('/getFriends', userController.getFriends);

routes.post('/sendMessage', protectedRoutes, messageController.sendMessages);
routes.get('/getMessage', protectedRoutes, messageController.getMessages);

module.exports = routes;
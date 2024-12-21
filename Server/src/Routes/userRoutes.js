const express = require('express');
const routes = express.Router();

const userController = require('../Controller/userController');

routes.post('/signup', userController.signUp);
routes.post('/signin', userController.signIn);

module.exports = routes;
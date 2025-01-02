const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const routes = require('./Routes/userRoutes');
const { app, server } = require('./socket/socket');


dotenv.config();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

//Routes and Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/chatapp', routes);

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

server.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
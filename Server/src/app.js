const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const routes = require('./Routes/userRoutes');
const app = express();

dotenv.config();

const DB_URI = 'mongodb://localhost:27017/chatapp'
const PORT = process.env.PORT || 5000;

//Routes and Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/chatapp', routes);

mongoose.connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
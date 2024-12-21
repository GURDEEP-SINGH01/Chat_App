const express = require('express');
const mongoose = require('mongoose');

const routes = require('./Routes/userRoutes');
const app = express();

const DB_URI = 'mongodb://localhost:27017/chatapp'

mongoose.connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use(express.json());
app.use('/chatapp', routes);
app.get('/home', (req, res) => {
    res.send('home');
});

app.listen(9000, () => {
    console.log('server is running at port' + 9000);
});
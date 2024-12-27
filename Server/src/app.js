const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require('./Routes/userRoutes');
const app = express();

dotenv.config();

const DB_URI = 'mongodb://localhost:27017/chatapp'
const PORT = process.env.PORT || 5000;
mongoose.connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use(express.json());
app.use('/chatapp', routes);
app.get('/home', (req, res) => {
    res.send('home');
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
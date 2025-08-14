
// server.js
const express = require('express');

// Initialize express
const app = express();


// Enable CORS for all routes
const cors = require('cors');

//middlewares
app.use(cors());

//load database configuration
const connectDB = require('./config/database');

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

//Route test
app.get('/', (req, res) => {
    res.json({message:'API is running...'});
});

// load environment variables .env
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Start the server
// You can access the server at http://localhost:5000
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
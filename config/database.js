
//load mongoose
const mongoose = require("mongoose");

//load environment variables .env
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
// Database connection URI
const dbURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;

// middleware/authMiddleware.js
// Middleware to verify JWT token
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

// Middleware to verify JWT token
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Access denied. Token missing' });
    }
    // Extract the token from the header
    const token = authHeader.split(' ')[1];
    try{
    // Check if the token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

     // Find the user by ID from the decoded token
    const user = await user.findById(decoded.id).select('-password -__v');
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    // Attach the user to the request object
    req.user = user;
    next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token or expired' });
    }
};

module.exports = authMiddleware;

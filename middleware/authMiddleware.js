// middleware/authMiddleware.js
// Middleware to verify JWT token
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Middleware to verify JWT token
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("headers received:", req.headers);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.warn("No token provided or invalid format");
        return res.status(403).json({ message: 'Access denied. Token missing' });
    }
    // Extract the token from the header
    const token = authHeader.split(' ')[1];
    console.log("Token received:", token);
    try{
    // Check if the token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

     // Find the user by ID from the decoded token
    const user = await user.findById(decoded.id).select('-password');
    console.log("User found:", user);
    if (!user) {
        console.warn("User not found for the provided token");
        return res.status(404).json({ message: 'User not found' });
    }

    // Attach the user to the request object
    req.user = user;
    next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: 'Invalid token or expired' });
    }
};

module.exports = authMiddleware;

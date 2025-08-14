
// utility/security.js
// Utility functions for security-related operations such as password hashing and JWT generation
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (user, role, isActive) => {
    const playload = {
        id: user._id,
        role: role,
        isActive: isActive,
    };
    return jwt.sign(
        playload,
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );
}

//refresh token
const refreshToken = (user) => {
    return jwt.sign(
        {user},
        process.env.JWT_SECRET,
        { expiresIn: '1h' });
}

module.exports = {
    generateToken,
    refreshToken,
};

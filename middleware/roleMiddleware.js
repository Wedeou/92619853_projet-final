// middleware/roleMiddleware.js
// Middleware to verify the role of the user
const user = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {

        const userRole = req.user.role;
        if (userRole !== requiredRole) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};

module.exports = roleMiddleware;

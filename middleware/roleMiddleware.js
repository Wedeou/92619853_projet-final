// middleware/roleMiddleware.js
// Middleware to check user roles and permissions
const permissions = require('../middleware/permission'); // Assuming permissions is an object that defines the permissions for each role

const roleMiddleware = (resource, action) => {
    return (req, res, next) => {
        console.log(`Checking permissions for resource: ${resource}, action: ${action}`);
        console.log("User role:", req.user?.role); //user role
        console.log("Permisssions expected:", permissions[resource]?.[action]); // permissions expected

        // Check if the user is authenticated
        const userRole = req.user?.role;

        if (!userRole) {
            console.warn("User role is not defined in request");
            return res.status(401).json({ message: 'Unauthorized: user not found' });
        }

        // check if the resource and action are valid
        if (!permissions[resource] || !permissions[resource][action]) {
            console.warn(`Invalid resource or action: ${resource}, ${action}`);
            return res.status(403).json({ message: 'Forbidden: invalid resource or action' });
        }

        // Check if the user has the required permission
        if (!permissions[resource][action].includes(userRole)) {
            console.warn('role "${userRole}" is not allowed to perform this ${action} action on ${resource}');
            return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
        }
        console.log("User has permission to perform the action");
        next(); // User has permission, proceed to the next middleware or route handler

    }
};
module.exports = roleMiddleware;

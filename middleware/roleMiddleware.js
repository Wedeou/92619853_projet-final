// middleware/roleMiddleware.js
// Middleware pour vérifier les permissions d'un utilisateur sur une ressource

const permissions = require('../middleware/permission'); // Assurez-vous que le chemin est correct

const roleMiddleware = (resource, action) => {
    return (req, res, next) => {
        console.log(`Checking permissions for resource: ${resource}, action: ${action}`);
        console.log("User role:", req.user?.role); // Affiche le rôle de l'utilisateur pour le débogage
        console.log("Permisssions expected:", permissions[resource]?.[action]); // Affiche les permissions attendues pour le débogage
        const userRole = req.user?.role; // req.user doit être défini par authMiddleware

        if (!userRole) {
            console.warn("User role is not defined in request");
            return res.status(401).json({ message: 'Unauthorized: user not found' });
        }

        // Vérifier que la ressource et l'action existent dans la config
        if (!permissions[resource] || !permissions[resource][action]) {
            console.warn(`Invalid resource or action: ${resource}, ${action}`);
            return res.status(403).json({ message: 'Forbidden: invalid resource or action' });
        }

        // Vérifier que le rôle de l'utilisateur est autorisé à effectuer l'action sur la ressource
        if (!permissions[resource][action].includes(userRole)) {
            console.warn('role "${userRole}" is not allowed to perform this ${action} action on ${resource}');
            return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
        }
        console.log("User has permission to perform the action");
        next(); // Tout est OK, passer à la route suivante
        };

    };


module.exports = roleMiddleware;

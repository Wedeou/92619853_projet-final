// middleware/roleMiddleware.js
// Middleware pour vérifier les permissions d'un utilisateur sur une ressource

const permissions = require('../middleware/permission'); // Assurez-vous que le chemin est correct

const roleMiddleware = (resource, action) => {
    return (req, res, next) => {
        const userRole = req.user?.role; // req.user doit être défini par authMiddleware

        if (!userRole) {
            return res.status(401).json({ message: 'Unauthorized: user not found' });
        }

        // Vérifier que la ressource et l'action existent dans la config
        if (!permissions[resource] || !permissions[resource][action]) {
            return res.status(403).json({ message: 'Forbidden: invalid resource or action' });
        }

        // Vérifier que le rôle de l'utilisateur est autorisé
        if (!permissions[resource][action].includes(userRole)) {
            return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
        }

        next(); // Tout est OK, passer à la route suivante
    };
};

module.exports = roleMiddleware;

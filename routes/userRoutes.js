// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const userController = require('../controllers/userController');
const permissions = require('../middleware/permission');

// Route pour enregistrer un nouvel utilisateur (admin uniquement)
router.post(
    '/register',
   authMiddleware,
   roleMiddleware('user', 'manage'), // Seuls les admins peuvent enregistrer des utilisateurs
    userController.register
);

// Route pour connecter un utilisateur
router.post('/login', userController.login);

// Route pour obtenir la liste des utilisateurs (admin uniquement)
router.get(
    '/users',
   // authMiddleware,
   // roleMiddleware('user', 'manage'),
    userController.getAllUsers
);

// Route pour obtenir les détails d'un utilisateur spécifique (admin uniquement)
router.get(
    '/users/:id',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.getUserById
);

// Route pour mettre à jour un utilisateur (admin uniquement)
router.put(
    '/users/:id',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.updateUser
);

// Route pour supprimer un utilisateur (admin uniquement)
router.delete(
    '/users/:id',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.deleteUser
);

module.exports = router;

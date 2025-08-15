/*
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Ajouter un menu
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('menu', 'add'),
    menuController.create
);

// Mettre à jour un menu
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'update'),
    menuController.updateMenu
);

// Supprimer un menu
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'delete'),
    menuController.deleteMenu
);

// Voir les menus
router.get(
    '/',
    authMiddleware,
    roleMiddleware('menu', 'view'),
    menuController.getAllMenus
);

module.exports = router;
*/
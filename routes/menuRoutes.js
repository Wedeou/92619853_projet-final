
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const menuController = require('../controllers/menuController');
const permissions = require('../middleware/permission');

// add menu
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('menu', 'add'),
    menuController.create
);

// update menu
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'update'),
    menuController.updateMenu
);

// delete menu
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'delete'),
    menuController.deleteMenu
);

// all menus
router.get(
    '/',
    authMiddleware,
    roleMiddleware('menu', 'view'),
    menuController.getAllMenus
);

module.exports = router;

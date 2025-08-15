// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const permissions = require('../middleware/permission');
const menuController = require('../controllers/menuController');





// Exemple : route pour ajouter un menu
router.post('/menu',
    authMiddleware,
    roleMiddleware('menu','add'), // On récupère directement la règle
    menuController.createMenu
);

/*/ Exemple : route pour voir le menu
router.get('/menu',
    authMiddleware,
    roleMiddleware('menu','view'),
    menuController.getMenus
);
*/


module.exports = router;
/*/ routes/staffRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Importer les contrôleurs nécessaires
const staffController = require('../controllers/staffController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const permissions = require('../middleware/permission');

// Route pour créer un nouveau membre du staff
router.post('/staff',
    authMiddleware,
    roleMiddleware('staff','create'), // On récupère directement la règle
    staffController.createStaff
);

// Route pour obtenir le planning du staff
router.get('/staff/planning',
    authMiddleware,
    roleMiddleware('staff','viewPlanning'),
    staffController.getStaffPlanning
);*/

module.exports = router;
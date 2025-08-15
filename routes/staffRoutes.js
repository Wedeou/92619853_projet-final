// routes/staffRoutes.js
// Import staffController
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const staffController = require('../controllers/staffController');
const permissions = require('../middleware/permission');

// Route to create staff
router.post('/staff',
    authMiddleware,
    roleMiddleware('staff','create'),
    staffController.create
);

// Route to update staff
router.get('/staff/planning',
    authMiddleware,
    roleMiddleware('staff','viewPlanning'),
    staffController.getStaffPlanning
);
// Route to delete staff
router.delete('/staff/:id',
    authMiddleware,
    roleMiddleware('staff','delete'),
    staffController.deleteStaff
);

// Route to get all staff
router.get('/staff/all',
    authMiddleware,
    roleMiddleware('staff','viewAll'),
    staffController.getAllStaff
);

// Route to get staff by ID
router.get('/staff/:id',
    authMiddleware,
    roleMiddleware('staff','view'),
    staffController.getStaffById
);
// Route to insert multiple staff
router.post('/staff/bulk',
    authMiddleware,
    roleMiddleware('staff','create'),
    staffController.insertBulkStaff
);

module.exports = router;
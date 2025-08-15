const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const orderController = require('../controllers/orderController');

// create a new order
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('order', 'create'),
    orderController.create
);

// list all orders
router.get(
    '/all',
    authMiddleware,
    roleMiddleware('order', 'view'),
    orderController.getAllOrders
);
// update an order
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'update'),
   orderController.updateOrder
);

// delete an order
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'delete'),
    orderController.deleteOrder
);

// get order by ID
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'view'),
    orderController.getOrderById
);
// insert multiple orders
router.post(
    '/bulk',
    authMiddleware,
    roleMiddleware('order', 'create'),
    orderController.insertBulkOrders
);

module.exports = router;

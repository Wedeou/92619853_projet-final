// controllers/orderController.js
// Fonctions to manage orders
const Order = require('../models/orders');

// Function to crate a new order
const create = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to update an order
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to delete an order
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//multiple orders
const insertBulkOrders = async (req, res) => {
    try {
        const orders = await Order.insertMany(req.body);
        res.status(201).json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Export functions
module.exports = {
    create,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
    insertBulkOrders
};
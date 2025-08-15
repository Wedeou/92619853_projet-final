// controllers/menuController.js
// Fonctions to manage menus
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const menuController = require('../controllers/menuController');
const Menu = require('../models/menus');

// Fonction to create menu
const create = async (req, res) => {
    try {
        const newMenu = new Menu(req.body);
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
 // Function to update menu
const updateMenu = async (req, res) => {
    try {
        const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).json(menu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to delete menu
const deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findByIdAndDelete(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get all menus
const getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Function to get menu by ID
const getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    create,
    updateMenu,
    deleteMenu,
    getAllMenus,
    getMenuById
};

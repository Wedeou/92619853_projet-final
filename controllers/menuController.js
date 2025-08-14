// controllers/menuController.js
// Fonctions pour gérer les menus
const Menu = require('../models/menuModel');

// Fonction pour créer un nouveau menu
const createMenu = async (req, res) => {
    try {
        const newMenu = new Menu(req.body);
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createMenu,
};

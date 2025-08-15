// controllers/staffController.js
// Fonctions pour gérer le staff
const Staff = require('../models/staff');

// Fonction pour créer un nouveau membre du staff
const createStaff = async (req, res) => {
    try {
        const newStaff = new Staff(req.body);
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



module.exports = {
    createStaff,
};

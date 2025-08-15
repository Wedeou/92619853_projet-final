// controllers/eventController.js
// Fonctions pour gérer les événements
const Event = require('../models/eventModel');

// Fonction pour créer un nouvel événement
const createEvent = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    createEvent,
};
// controllers/userController.js
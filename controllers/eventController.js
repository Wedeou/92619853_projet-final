// controllers/eventController.js
// Fonctions pour gérer les événements
const Event = require('../models/eventModel');

// Fonction pour créer un nouvel événement
const create = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fonction pour approuver un événement
const approve = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour lister tous les événements
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Fonction pour lister les événements de l'utilisateur
const getMyEvents = async (req, res) => {
    try {
        const events = await Event.find({ createdBy: req.user._id });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour obtenir les détails d'un événement spécifique
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour mettre à jour un événement
const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {  new: true });
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fonction pour supprimer un événement
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exporter les fonctions pour les utiliser dans les routes
module.exports = {
    create,
    approve,
    getAllEvents,
    getMyEvents,
    getEventById,
    updateEvent,
    deleteEvent
};
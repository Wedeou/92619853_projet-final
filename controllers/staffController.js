// controllers/staffController.js
// Functions to manage staff
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const staffController = require('../controllers/staffController');
const Staff = require('../models/staff');

// Function to create staff
const create = async (req, res) => {
    try {
        const newStaff = new Staff(req.body);
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Function to update staff
const updateStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.status(200).json(staff);
    }   catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to delete staff
const deleteStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get all staff
const getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get staff by ID
const getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to insert multiple staff
const insertBulkStaff = async (req, res) => {
    try {
        const staffList = await Staff.insertMany(req.body);
        res.status(201).json(staffList);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Function to get staff planning
const getStaffPlanning = async (req, res) => {
    try {
        // Assuming planning is a field in the Staff model
        const staffPlanning = await Staff.find({}, 'name planning');
        res.status(200).json(staffPlanning);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    create,
    updateStaff,
    deleteStaff,
    getAllStaff,
    getStaffById,
    insertBulkStaff,
    getStaffPlanning
};

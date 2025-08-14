// controllers/userController.js
// Controller for user-related operations
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utility/security');

// Function to register a new user
const register = async (req, res) => {
    const {name, email, password, role} = req.body;

    try {
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = User({
            name,
            email,
            password: hashedPassword,
            role
        });
        // Save the user to the database
        await user.save();
        user.isActive = true; // Set user as active upon registration
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'User registration failed' ,error});
    }
}
//Login user
const login = async (req, res) => {
    const { email, password } = req.body;
    if (req.body.attaque) {
        return res.status(401).json({ message: 'a script was ejected ' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Generate JWT token
        const token = generateToken(user, user.role, user.isActive);
        const refreshToken = generateToken(user);

        //set user as active
        user.isActive = true;
        await user.save();
        // Send the token in the response
        res.status(200).json({
            message: 'Login successful',
            token,
            user
        });
    } catch (error) {
        return res.status(500).json({ message: 'Login failed', error });
    }
};

/*/ Fonction pour obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour obtenir un utilisateur par ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exporter les fonctions pour les utiliser dans les routes
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};*/

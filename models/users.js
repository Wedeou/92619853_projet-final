// models/users.js

// Importing mongoose
const mongoose = require('mongoose');

// Defining the user schema
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    maxlength: [200, 'Password must be less than 200 characters long'],
    match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/, 'Password must contain at least one letter, one number, and one special character']
    // match: [/^[a-zA-Z0-9]{6,10}$/, 'Password must contain only letters and numbers'],
  },
  role: {
    type: String,
    enum: ['client', 'traiteur', 'serveur', 'admin'],
    required: true,
    default: 'client',
  },
  refreshToken: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },

}, {timestamps: true});

// Declare methods
userSchema.methods.setActive = function() {
    this.isActive = true;
    return this.save();
};

userSchema.methods.getActive = function() {
    return this.isActive;
};

// Exporting the User model
module.exports = mongoose.model('User', userSchema, '92619853_users');

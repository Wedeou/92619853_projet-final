// models/menus.js
// Importing mongoose
const mongoose = require('mongoose');

// Defining the menu schema
const menuSchema = new mongoose.Schema({

  dish: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
}, {timestamps: true });

// Declare methods
menuSchema.methods.setActive = function() {
    this.isActive = true;
    return this.save();
};
menuSchema.methods.getActive = function() {
    return this.isActive;
};

// Exporting the Menu model
module.exports = mongoose.model('Menu', menuSchema, '92619853_menus');

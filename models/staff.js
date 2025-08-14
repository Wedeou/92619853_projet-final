// Importing mongoose
const mongoose = require('mongoose');

// Defining the staff schema
const staffSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  planning: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  taches: String
}, {timestamps: true });

// Declare methods
staffSchema.methods.setActive = function() {
    this.isActive = true;
    return this.save();
};
staffSchema.methods.getActive = function() {
    return this.isActive;
};

// Exporting the Staff model
module.exports = mongoose.model('Staff', staffSchema, '92619853_staff');


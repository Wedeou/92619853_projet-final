// Importing mongoose
const mongoose = require('mongoose');

// Defining the event schema
const eventSchema = new mongoose.Schema({

  type_events: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  quotation:{
    type : Number,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  staff: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {timestamps: true });

// Declare methods
eventSchema.methods.setActive = function() {
    this.isActive = true;
    return this.save();
};
eventSchema.methods.getActive = function() {
    return this.isActive;
};

// Exporting the Event model
module.exports = mongoose.model('Event', eventSchema, '92619853_events');

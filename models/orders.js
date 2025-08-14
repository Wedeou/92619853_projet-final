// Importing mongoose
const mongoose = require('mongoose');

// Defining the order schema
const orderSchema = new mongoose.Schema({

  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dish: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  }],
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
    default: 'pending'
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },

}, { timestamps: true });

// Méthodes
orderSchema.methods.setActive = function() {
    this.isActive = true;
    return this.save();
};
orderSchema.methods.getActive = function() {
    return this.isActive;
};

// Exporting the Order model
module.exports = mongoose.model('Order', orderSchema, '92619853_orders');

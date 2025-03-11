// models help you define schema of your table 

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  menu_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  prices: {
    default: { type: Number, default: null }, // For single-size items
    small: { type: Number, default: null },   // For items with two sizes
    large: { type: Number, default: null }
  },
  description: {
    category: { type: String, default: null }, // Category description 
    item: { type: String, default: null} // Item specific description 
  },
  isSpicy: {
    type: Boolean,
    default: false
  }
});

// Link the schema to the "menuItems" collection
module.exports = mongoose.model('MenuItem', menuItemSchema, 'menuItems');

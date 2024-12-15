// Define schema and model 
// A Mongoose schema ensures that every document in a collection follows the specified structure and validates the data before saving it.
// Without a schema: You might accidentally save a menu item without a name or with incorrect types for fields.
// With a schema: Mongoose enforces that name is required and must be a string.


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
    type: String,
    default: null  // Optional field
  },
  isSpicy: {
    type: Boolean,
    default: false
  }
});

// Link the schema to the "menuItems" collection
module.exports = mongoose.model('MenuItem', menuItemSchema, 'menuItems');

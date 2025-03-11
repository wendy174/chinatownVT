const mongoose = require("mongoose"); 

const cartSchema = new mongoose.Schema({ 
    userId: { type: String, required: true, unique: true}, // userId from Clerk authentication 
    items: [ 
        { 
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
              }, 
            selectedSize: String, // e.g., "small", "large", "default"
            selectedPrice: Number, // Price based on size
            quantity: Number, // Number of items
            instructions: String, // Special instructions (if any)

        }
    ]
})

// This connects your Cart model to the cart collection in mongodb 
    // No need to create the collection 
module.exports = mongoose.model('Cart', cartSchema, 'cart'); 



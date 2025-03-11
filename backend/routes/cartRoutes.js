const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const { getAuth } = require("@clerk/express");


// **GET /cart → Fetch Cart for Logged-In User**
router.get('/', async (req, res) => {
    try {
      const { userId } = getAuth(req);
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
  
      let cart = await Cart.findOne({ userId });
  
      // **If no cart exists, create an empty one**
        // When you define a mongoose model, it has built-in methods such as .save()
        // Need .save() to persist it in the database other wise it creates it and doesn't save it 
        // res.json(cart) to save as .json and send to frontend 
      if (!cart) {
        cart = new Cart({ userId, items: [] });
        await cart.save();
      }
  
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  // **POST /cart → Save or Update Cart**
  // Triggered with addToCart function from frontend 
  router.post('/', async (req, res) => {
    try {
      const { userId } = getAuth(req);
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
  
      const { items } = req.body; // Extract items from the request body sent from frontend  
      let cart = await Cart.findOne({ userId }); // Finds user's cart 
  
      if (cart) {
        cart.items = items; // updates existing cart items to the items sent from the frontend 
      } else {
        cart = new Cart({ userId, items });
      }
  
      await cart.save(); // saves cart to db 
      res.json(cart); // respond back to frontend with updated cart 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });


  // **DELETE /cart → Clear Cart on Logout**
router.delete('/', async (req, res) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) return res.status(401).json({ error: "Unauthorized" });

        await Cart.findOneAndDelete({ userId });
        res.json({ message: "Cart cleared" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


  module.exports = router; // ✅ Export as `router`

  
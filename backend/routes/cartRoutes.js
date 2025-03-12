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


router.post('/remove-item', async (req, res) => { 
  try { 
      const { userId } = getAuth(req); 
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
    
      const {itemId} = req.body; 
    
      const result = await Cart.updateOne(
        { userId },
        { $pull: { items: { _id: itemId } } } // Removes the item with this ID
    );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "Item not found in cart" });
    }
  
      res.json({success: true})
  } catch (error) { 
      console.error(error); 
      res.status(500).json({error: "Server error"})
  }

})

  
  // **POST /cart → Save or Update Cart**
  // Triggered with addToCart function from frontend 
  router.post('/', async (req, res) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) return res.status(401).json({ error: "Unauthorized" });

        const { items } = req.body;

        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $set: { items } },
            { new: true, upsert: true } // `upsert: true` creates a new cart if it doesn't exist
        );

        res.json(cart);
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

        // Update items to an empty array 

        const result = await Cart.updateOne( 
          { userId }, 
          { $set: {items: [] } }
        )
        res.json({message: "Cart emptied"}); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


  module.exports = router; // ✅ Export as `router`

  
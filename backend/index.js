// index.js is the main entry point for express server 
// here express connects to mongodb altas cluster 

const mongoose = require('mongoose'); 
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
// Creates instance of express app. 

// dotenv loads env. var --> used to keep db uri secure 
require('dotenv').config(); 

// mongodb connection string from .env
const mongoURI = process.env.ATLAS_URI; 

// Import menuItems model
// MenuItem is uppercase for variables that represent classes or constructors
const MenuItem = require('./models/MenuItem'); 

// Middleware to parse JSON 
app.use(express.json());

// Start the server. 
const PORT = 3000;
app.listen(PORT, () => { // app.listen() starts the server and makes it listen for incoming request 
    console.log(`Server running on http://localhost:${PORT}`);
})

// Connects to mongodb atlas using url 
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// cors 
app.use(cors({ origin: 'http://localhost:3000' }));


// Get all menu items 
app.get('/menu', async (req, res) => { 
  try { 
    const menuItems = await MenuItem.find(); 
    res.status(200).send(menuItems); 
  } catch (err) { 
    res.status(500).send(err.message)
  }
})

// Get all "Lunch"
app.get('/lunch', async (req, res) => { 
  try { 
    const menuItems = await MenuItem.find({category: "Lunch"}); 
    res.status(200).send(menuItems); 
  } catch (err) { 
    res.status(500).send(err.message)
  }
}); 




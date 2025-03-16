// index.js is the main entry point for express server 
    // index.js replaces server.js/app.js 
// here express connects to mongodb altas cluster 
require('dotenv').config(); 

const mongoose = require('mongoose'); 
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const mongoURI = process.env.ATLAS_URI; 
const PORT = process.env.PORT || 3000;

// Clerk Authentication 
const { clerkMiddleware }  = require("@clerk/express")
app.use(clerkMiddleware());


const allowedOrigins = ['http://192.168.50.245:5173', 'http://localhost:5173'];

// Cors 
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },  // ✅ Allow frontend access
  credentials: true,  // ✅ Allow cookies/session tokens to be sent
  methods: ["GET", "POST", "DELETE"],  // ✅ Allow required methods
  allowedHeaders: ["Content-Type", "Authorization"]  // ✅ Allow necessary headers
}));

app.use(express.json());

// Routes
const cartRoutes = require('./routes/cartRoutes')
const menuRoutes = require('./routes/menuRoutes'); 

// Mounts the cartRoutes router at the /cart path. 
// This means that any routes defined in cartRoutes.js will be prefixed with /cart.
app.use('/cart', cartRoutes); 
app.use('/menu', menuRoutes); 


// Middleware to parse JSON 

// Connects to mongodb atlas using url 
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server. 
app.listen(PORT, () => { // app.listen() starts the server and makes it listen for incoming request 
  console.log(`Server running on http://localhost:${PORT}`);
})
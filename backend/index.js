// index.js is the main entry point for express server 
    // index.js replaces server.js/app.js 
// here express connects to mongodb altas cluster 

const mongoose = require('mongoose'); 
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 

const cartRoutes = require('./routes/cartRoutes')

const { clerkMiddleware, getAuth }  = require("@clerk/express")
const { requireAuth } = require("@clerk/express")

app.use(clerkMiddleware())


// Creates instance of express app. 

// dotenv loads env. var --> used to keep db uri secure 
require('dotenv').config(); 

// mongodb connection string from .env
const mongoURI = process.env.ATLAS_URI; 

// Import menuItems model
// MenuItem is uppercase for variables that represent classes or constructors
const MenuItem = require('./models/MenuItem'); 

// Middleware to parse JSON 

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

app.use(cors({
    origin: "http://localhost:5173",  // ✅ Allow frontend access
    credentials: true,  // ✅ Allow cookies/session tokens to be sent
    methods: ["GET", "POST", "DELETE"],  // ✅ Allow required methods
    allowedHeaders: ["Content-Type", "Authorization"]  // ✅ Allow necessary headers
}));



app.use(express.json());


const categoryOrder = ["Appetizers", "Soup", "Egg Foo Young", "Lo Mein", "Chop Suey", "Fried Rice", "Chow Mein", "Vegetables", "Sweet & Sour", "Poultry", "Pork", "Beef", "Seafood", "House Specialties", "Special Diet Menu", "Combination Plates", "Lunch" ]

app.use('/cart', cartRoutes); // Use cart routes



// ensures options are right next to each other ex c3 & c3a
app.get('/menu', async (req, res) => {
  try {
    let menuItems = await mongoose.connection.db
      .collection('menuItems')
      .aggregate([
        {
          $addFields: {
            menuIdNumeric: {
              $toInt: {
                $ifNull: [
                  {
                    $getField: {
                      field: "match",
                      input: {
                        $arrayElemAt: [
                          { $regexFindAll: { input: "$menu_id", regex: /[0-9]+/ } }, 0
                        ]
                      }
                    }
                  },
                  "0"
                ]
              }
            },
            menuIdAlpha: {
              $ifNull: [
                {
                  $getField: {
                    field: "match",
                    input: {
                      $arrayElemAt: [
                        { $regexFindAll: { input: "$menu_id", regex: /[a-zA-Z]+/ } }, 0
                      ]
                    }
                  }
                },
                ""
              ]
            }
          }
        },
        {
          $sort: {
            category: 1,
            menuIdNumeric: 1,
            menuIdAlpha: 1
          }
        },
        {
          $group: {
            _id: "$category",
            items: { $push: "$$ROOT" }
          }
        }
      ])
      .toArray();

    menuItems.sort((a, b) => {
      return categoryOrder.indexOf(a._id) - categoryOrder.indexOf(b._id);
    });

    res.status(200).json(menuItems);
  } catch (error) {
    console.error('Aggregation Error:', error);
    res.status(500).send('Error fetching menu items');
  }
});









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
app.use(cors({ origin: 'http://localhost:5173' }));

const categoryOrder = ["Appetizers", "Soup", "Egg Foo Young", "Lo Mein", "Chop Suey", "Fried Rice", "Chow Mein", "Vegetables", "Sweet & Sour", "Poultry", "Pork", "Beef", "Seafood", "House Specialties", "Special Diet Menu", "Combination Plates", "Lunch" ]


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



// Menu sorted by category in certain order 

// returns menu sorted by category
// app.get('/menu', async (req, res) => {
//   try {
//     let menuItems = await mongoose.connection.db
//       .collection('menuItems')
//       .aggregate([
//         {
//           $group: {
//             _id: "$category",
//             items: { $push: "$$ROOT" }
//           }
//         }
//       ])
//       .toArray();

//     // Custom sort by predefined array
//     menuItems.sort((a, b) => {
//       return categoryOrder.indexOf(a._id) - categoryOrder.indexOf(b._id);
//     });

//     res.status(200).json(menuItems);
//   } catch (error) {
//     console.error('Aggregation Error:', error);
//     res.status(500).send('Error fetching menu items');
//   }
// });
















// app.get('/menu', async (req, res) => {
//   try {
//     const menuItems = await mongoose.connection.db
//       .collection('menuItems')  // Directly access the menuItems collection
//       .aggregate([
//         {
//           $group: {
//             _id: "$category",  // Group by category
//             items: { $push: "$$ROOT" }  // Push full documents into 'items' array
//           }
//         },
//         {
//           $sort: { _id: 1 }  // Sort alphabetically by category
//         }
//       ])
//       .toArray();  // Convert aggregation results to an array

//     res.status(200).json(menuItems);  // Send response as JSON
//   } catch (error) {
//     console.error('Aggregation Error:', error);
//     res.status(500).send('Error fetching menu items');
//   }
// });

// Get all menu items 
// app.get('/menu', async (req, res) => { 
//   try { 
//     const menuItems = await MenuItem.find(); 
//     res.status(200).send(menuItems); 
//   } catch (err) { 
//     res.status(500).send(err.message)
//   }
// })


// Get all "Lunch"
// app.get('/lunch', async (req, res) => { 
//   try { 
//     const menuItems = await MenuItem.find({category: "Lunch"}); 
//     res.status(200).send(menuItems); 
//   } catch (err) { 
//     res.status(500).send(err.message)
//   }
// }); 






const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

const categoryOrder = ["Appetizers", "Soup", "Egg Foo Young", "Lo Mein", "Chop Suey", "Fried Rice", "Chow Mein", "Vegetables", "Sweet & Sour", "Poultry", "Pork", "Beef", "Seafood", "House Specialties", "Special Diet Menu", "Combination Plates", "Lunch" ]

// ensures options are right next to each other ex c3 & c3a
router.get('/', async (req, res) => {
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

module.exports = router; // ✅ Export as `router`










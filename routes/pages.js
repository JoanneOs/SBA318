// // This file handles routes that render pages (like homepage, driver page, etc.)

// const express = require('express');
// const router = express.Router();

// const tripsData = require('../data/trips.json');//from json trop file
// // Route for homepage
// router.get('/', (req, res) => {
//   res.render('index'); // show index.ejs
// });

// // Route for driver page
// // router.get('/drivers', (req, res) => {
// // //   res.render('driver'); // show driver.ejs

// // //same error render manager to fix we do following:

// // const drivers = [...new Set(tripsData.map(trip => trip.driverName))];
// //   res.render('driver', { drivers }); // now EJS can use "drivers"

// // });

// // Route for driver page
// router.get('/', (req, res) => {
//     // For now, let's just pick the first driver in the tripsData for testing
// //     const currentDriver = tripsData[0]; // pick the first trip (could be driver or specific data)
// res.render('index'); // renders index.ejs from views/

// //     res.render('driver', { currentDriver }); // pass currentDriver to the view
//  });
  

// // Route for manager page
// // router.get('/manager', (req, res) => {
// //   res.render('manager'); // show manager.ejs
// // });

// router.get('/drivers', (req, res) => {
//     res.render('drivers'); // renders drivers.ejs from views/
//   });
  
//   // You can add more page routes like this
//   router.get('/trips', (req, res) => {
//     res.render('trips'); // renders trips.ejs from views/
//   });
  


// router.get('/manager', (req, res) => {


//     //  I had data in trips.json and wanted to display it on the manager page, so you:
//     // Loaded the data in your JS:
//     // const tripsData = require('../data/trips.json');
//     // Passed the data to the EJS page during rendering:
//     // res.render('manager', { trips: tripsData });
//     // Used trips in your EJS file to loop through and display the data.


//     //error was happeing here the render 
//     res.render('manager', { trips: tripsData }); //  pass trips into your EJS
//   });

// module.exports = router;
// This file handles routes that render pages (like homepage, driver page, etc.)

const express = require('express');
const router = express.Router();

const tripsData = require('../data/trips.json'); // import trips from JSON

// Route for homepage
router.get('/', (req, res) => {
  res.render('index'); // renders index.ejs
});

// // Route for drivers page (list of drivers from trips data)
// router.get('/drivers', (req, res) => {
//   const drivers = [...new Set(tripsData.map(trip => trip.driverName))]; // get unique driver names
//   res.render('drivers', { drivers }); // renders drivers.ejs with driver data
// });

router.get('/drivers', (req, res) => {
    const driver = tripsData[0]; // just using the first one for testing
    res.render('drivers', { driver }); //  sends driver to EJS
  });
  

//driver 1 and 2 



// Route for trips page
router.get('/trips', (req, res) => {
  res.render('trips'); // renders trips.ejs
});

// Route for manager page with trip data
router.get('/manager', (req, res) => {
  res.render('manager', { trips: tripsData }); // pass trips data to manager.ejs
});

// Export router to use in server.js
module.exports = router;

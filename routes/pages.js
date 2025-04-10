// This file handles routes that render pages (like homepage, driver page, etc.)

const express = require('express');
const router = express.Router();

const tripsData = require('../data/trips.json');//from json trop file
// Route for homepage
router.get('/', (req, res) => {
  res.render('index'); // show index.ejs
});

// Route for driver page
// router.get('/drivers', (req, res) => {
// //   res.render('driver'); // show driver.ejs

// //same error render manager to fix we do following:

// const drivers = [...new Set(tripsData.map(trip => trip.driverName))];
//   res.render('driver', { drivers }); // now EJS can use "drivers"

// });

// Route for driver page
router.get('/drivers', (req, res) => {
    // For now, let's just pick the first driver in the tripsData for testing
    const currentDriver = tripsData[0]; // pick the first trip (could be driver or specific data)
  
    res.render('driver', { currentDriver }); // pass currentDriver to the view
  });
  

// Route for manager page
// router.get('/manager', (req, res) => {
//   res.render('manager'); // show manager.ejs
// });
router.get('/manager', (req, res) => {


    //  I had data in trips.json and wanted to display it on the manager page, so you:
    // Loaded the data in your JS:
    // const tripsData = require('../data/trips.json');
    // Passed the data to the EJS page during rendering:
    // res.render('manager', { trips: tripsData });
    // Used trips in your EJS file to loop through and display the data.


    //error was happeing here the render 
    res.render('manager', { trips: tripsData }); //  pass trips into your EJS
  });

module.exports = router;

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
const path = require('path');
const tripsData = require('../data/trips.json');

// Helper to get unique drivers from trips
const getUniqueDrivers = () => {
  const driversMap = new Map();
  tripsData.forEach(trip => {
    if (!driversMap.has(trip.driverId)) {
      driversMap.set(trip.driverId, {
        id: trip.driverId,
        name: trip.driverName
      });
    }
  });
  return Array.from(driversMap.values());
};

// Homepage
router.get('/', (req, res) => {
  res.render('index');
});

// Drivers List
router.get('/drivers', (req, res) => {
  res.render('drivers', { 
    drivers: getUniqueDrivers() 
  });
});

// Single Driver Profile
router.get('/drivers/:id', (req, res) => {
  try {
    const driverId = Number(req.params.id);
    const driverTrips = tripsData.filter(trip => trip.driverId === driverId);
    
    if (driverTrips.length === 0) {
      const validIds = [...new Set(tripsData.map(t => t.driverId))];
      return res.status(404).render('error', {
        message: `Driver ${driverId} not found`,
        details: `Valid IDs: ${validIds.join(', ')}`
      });
    }
    
    res.render('driver', {
      driver: {
        id: driverId,
        name: driverTrips[0].driverName,
        trips: driverTrips
      }
    });
    
  } catch (err) {
    console.error('Driver route error:', err);
    res.status(500).render('error', {
      message: 'Server Error',
      details: 'Check server logs'
    });
  }
});

// Trips Page
router.get('/trips', (req, res) => {
  res.render('trips', { trips: tripsData });
});

// Manager Dashboard
router.get('/manager', (req, res) => {
  res.render('manager', { trips: tripsData });
});

// Debug Endpoint
router.get('/debug-drivers', (req, res) => {
  res.json({
    allDrivers: getUniqueDrivers(),
    sampleTrip: tripsData[0],
    filePath: path.resolve(__dirname, '../data/trips.json')
  });
});

module.exports = router;
// This file handles routes that render pages (like homepage, driver page, etc.)

const express = require('express');
const router = express.Router();

//route will render the driver page and pass all drivers to the page
const drivers = require('../data/drivers.json');


// Route for homepage
router.get('/', (req, res) => {
  res.render('index'); // show index.ejs
});

// // Route for driver page
// router.get('/drivers', (req, res) => {
//   res.render('driver'); // show driver.ejs
// });

router.get('/drivers', (req, res) => {
    res.render('driver', { drivers });
  });


// Route for manager page
router.get('/manager', (req, res) => {
  res.render('manager'); // show manager.ejs
});

module.exports = router;

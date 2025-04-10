// This file handles routes that render pages (like homepage, driver page, etc.)

const express = require('express');
const router = express.Router();

// Route for homepage
router.get('/', (req, res) => {
  res.render('index'); // show index.ejs
});

// Route for driver page
router.get('/drivers', (req, res) => {
  res.render('driver'); // show driver.ejs
});

// Route for manager page
router.get('/manager', (req, res) => {
  res.render('manager'); // show manager.ejs
});

module.exports = router;

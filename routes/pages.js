// routes/pages.js
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Path to your trips data
const tripsDataPath = path.join(__dirname, '../data/trips.json');

// Home page
router.get('/', (req, res) => {
  res.render('index');
});

// Drivers list
router.get('/drivers', async (req, res, next) => {
  try {
    const data = await fs.readFile(tripsDataPath, 'utf8');
    const trips = JSON.parse(data);
    const drivers = [...new Set(trips.map(trip => trip.driverName))];
    res.render('drivers', { drivers });
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// Individual driver profile
router.get('/drivers/:id', async (req, res, next) => {
  try {
    const data = await fs.readFile(tripsDataPath, 'utf8');
    const trips = JSON.parse(data);
    const driverId = req.params.id;
    const driverTrips = trips.filter(trip => trip.driverId === driverId);
    if (driverTrips.length === 0) {
      return res.status(404).render('error', { message: 'Driver not found' });
    }
    res.render('driver', { driver: driverTrips[0].driverName, trips: driverTrips });
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// Trips
router.get('/trips', async (req, res, next) => {
  try {
    const data = await fs.readFile(tripsDataPath, 'utf8');
    const trips = JSON.parse(data);
    res.render('trips', { trips });
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// Manager dashboard
router.get('/manager', async (req, res, next) => {
  try {
    const data = await fs.readFile(tripsDataPath, 'utf8');
    const trips = JSON.parse(data);
    res.render('manager', { trips });
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

module.exports = router;

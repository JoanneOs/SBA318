// This is the route for all TRIP data — like a REST API

const express = require('express');
const router = express.Router();
const { getTrips } = require('../../controllers/tripsController');

// When someone goes to /api/trips, send back trip data
router.get('/', getTrips);

module.exports = router;

// This is the route for all DRIVER data — kind of like an API

const express = require('express');
const router = express.Router();

// Get the controller function that handles driver logic
const { getDrivers } = require('../../controllers/driversController');

// When someone goes to /api/drivers, respond with the driver list
router.get('/', getDrivers);

module.exports = router;

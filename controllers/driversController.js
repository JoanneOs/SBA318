// This file handles the logic for drivers — like sending data to the frontend

const drivers = require('../data/drivers.json'); // grab the sample data

// This function sends driver data as JSON
const getDrivers = (req, res) => {
  res.json(drivers); // respond with all the drivers
};

module.exports = { getDrivers };

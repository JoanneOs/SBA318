// This one does the same thing but for TRIPS

const trips = require('../data/trips.json'); // grab the trip data

// Function to respond with all trip data
const getTrips = (req, res) => {
  res.json(trips);
};

module.exports = { getTrips };

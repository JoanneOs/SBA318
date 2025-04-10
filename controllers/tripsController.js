// This one does the same thing but for TRIPS

const fs = require('fs');
const path = require('path');

const trips = require('../data/trips.json'); // grab the trip data

// Function to respond with all trip data
const getTrips = (req, res) => {

fs.writeFileSync(__dirname, '../data/trips.json',
    json.stringify(trips, null, 2)
);

  res.json(trips);
};

module.exports = { getTrips };

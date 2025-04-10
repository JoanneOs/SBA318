const fs = require('fs');
const path = require('path');
let trips = require('../data/trips.json');

// Helper to save data
const saveData = () => {
  fs.writeFileSync(
    path.join(__dirname, '../data/trips.json'),
    JSON.stringify(trips, null, 2)
  );
};

// GET with query params
const getTrips = (req, res) => {
  let results = trips;
  if (req.query.driverId) results = results.filter(t => t.driverId == req.query.driverId);
  if (req.query.origin) results = results.filter(t => t.origin.includes(req.query.origin));
  res.json(results);
};

// POST
const createTrip = (req, res) => {
  const newTrip = {
    id: trips.length ? Math.max(...trips.map(t => t.id)) + 1 : 1,
    ...req.body
  };
  trips.push(newTrip);
  saveData();
  res.status(201).json(newTrip);
};

// PUT
const updateTrip = (req, res) => {
  const id = parseInt(req.params.id);
  const index = trips.findIndex(t => t.id === id);
  
  if (index === -1) return res.status(404).json({ message: 'Trip not found' });
  
  trips[index] = { ...trips[index], ...req.body };
  saveData();
  res.json(trips[index]);
};

// DELETE
const deleteTrip = (req, res) => {
  const id = parseInt(req.params.id);
  trips = trips.filter(t => t.id !== id);
  saveData();
  res.status(204).send();
};

module.exports = { getTrips, createTrip, updateTrip, deleteTrip };
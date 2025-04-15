const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

// Path to your JSON file
const driverDataPath = path.join(__dirname, '../../data/drivers.json');

// Helper function to save data
const saveData = async (data) => {
  try {
    await fs.writeFile(driverDataPath, JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error('Error saving driver data');
  }
};

// GET all drivers (API route with filtering)
router.get('/', async (req, res, next) => {
  try {
    const data = await fs.readFile(driverDataPath, 'utf8');
    let drivers = JSON.parse(data);

    // Simple query filtering by status (if provided)
    if (req.query.status) {
      drivers = drivers.filter(d => d.status === req.query.status);
    }

    res.json(drivers);
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// POST create driver (API route)
router.post('/', async (req, res, next) => {
  const { name, status } = req.body;
  if (!name || !status) {
    return res.status(400).send('Missing required fields: name, status');
  }

  try {
    const data = await fs.readFile(driverDataPath, 'utf8');
    const drivers = JSON.parse(data);
    const newDriver = {
      id: Date.now().toString(), // Generate a new ID based on timestamp
      name,
      status
    };

    drivers.push(newDriver);
    await saveData(drivers);

    res.status(201).json(newDriver);
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// PUT update an existing driver by ID (API route)
router.put('/:id', async (req, res, next) => {
  const { name, status } = req.body;
  if (!name || !status) {
    return res.status(400).send('Missing required fields: name, status');
  }

  try {
    const data = await fs.readFile(driverDataPath, 'utf8');
    const drivers = JSON.parse(data);
    const index = drivers.findIndex(d => d.id === req.params.id);

    if (index === -1) {
      return res.status(404).send('Driver not found');
    }

    // Update the driver with new data
    drivers[index] = { ...drivers[index], name, status };
    await saveData(drivers);

    res.json(drivers[index]);
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// DELETE a driver by ID (API route)
router.delete('/:id', async (req, res, next) => {
  try {
    const data = await fs.readFile(driverDataPath, 'utf8');
    let drivers = JSON.parse(data);
    const initialLength = drivers.length;

    // Filter out the driver by ID
    drivers = drivers.filter(d => d.id !== req.params.id);

    if (drivers.length === initialLength) {
      return res.status(404).send('Driver not found');
    }

    await saveData(drivers);
    res.status(204).send(); // No content response for DELETE
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
});

// Global error handler middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const path = require('path');

// // Path to your JSON file
// const driverDataPath = path.join(__dirname, '../../data/drivers.json');

// // Driver Dashboard route
// router.get('/:id', (req, res) => {
//   fs.readFile(driverDataPath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading driver data:', err);
//       return res.status(500).send('Server error');
//     }

//     const drivers = JSON.parse(data);
//     const currentDriver = drivers.find(driver => driver.id === req.params.id);

//     if (!currentDriver) {
//       return res.status(404).send('Driver not found');
//     }

//     res.render('driver', { currentDriver });
//   });
// });

// module.exports = router;


// updating current code to:
// all required operations added: 
// GET / (list all + filtering)
// POST / (create)
// PUT /:id (update)
// DELETE /:id (remove)
// Kept your JSON file storage system
// Added proper error handling



const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to your JSON file
const driverDataPath = path.join(__dirname, '../../data/drivers.json');

// Helper function to save data
const saveData = (data) => {
  fs.writeFileSync(driverDataPath, JSON.stringify(data, null, 2));
};

// GET single driver (existing route - keep this)
router.get('/:id', (req, res) => {
  fs.readFile(driverDataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Server error');
    
    const drivers = JSON.parse(data);
    const driver = drivers.find(d => d.id === req.params.id);
    
    if (!driver) return res.status(404).send('Driver not found');
    
    res.json(driver); // Changed from render() to json() for API consistency
  });
});

// GET all drivers (NEW - required for CRUD)
router.get('/', (req, res) => {
  fs.readFile(driverDataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Server error');
    
    let drivers = JSON.parse(data);
    
    // Simple query filtering (NEW - meets query params requirement)
    if (req.query.status) {
      drivers = drivers.filter(d => d.status === req.query.status);
    }
    
    res.json(drivers);
  });
});

// POST create driver (NEW)
router.post('/', (req, res) => {
  fs.readFile(driverDataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Server error');
    
    const drivers = JSON.parse(data);
    const newDriver = {
      id: Date.now().toString(), // Simple ID generation
      ...req.body
    };
    
    drivers.push(newDriver);
    saveData(drivers);
    
    res.status(201).json(newDriver);
  });
});

// PUT update driver (NEW)
router.put('/:id', (req, res) => {
  fs.readFile(driverDataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Server error');
    
    const drivers = JSON.parse(data);
    const index = drivers.findIndex(d => d.id === req.params.id);
    
    if (index === -1) return res.status(404).send('Driver not found');
    
    drivers[index] = { ...drivers[index], ...req.body };
    saveData(drivers);
    
    res.json(drivers[index]);
  });
});

// DELETE driver (NEW)
router.delete('/:id', (req, res) => {
  fs.readFile(driverDataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Server error');
    
    let drivers = JSON.parse(data);
    const initialLength = drivers.length;
    
    drivers = drivers.filter(d => d.id !== req.params.id);
    
    if (drivers.length === initialLength) {
      return res.status(404).send('Driver not found');
    }
    
    saveData(drivers);
    res.status(204).send(); // No content response for DELETE
  });
});

module.exports = router;
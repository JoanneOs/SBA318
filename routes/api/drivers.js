const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to your JSON file
const driverDataPath = path.join(__dirname, '../../data/drivers.json');

// Driver Dashboard route
router.get('/:id', (req, res) => {
  fs.readFile(driverDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading driver data:', err);
      return res.status(500).send('Server error');
    }

    const drivers = JSON.parse(data);
    const currentDriver = drivers.find(driver => driver.id === req.params.id);

    if (!currentDriver) {
      return res.status(404).send('Driver not found');
    }

    res.render('driver', { currentDriver });
  });
});

module.exports = router;

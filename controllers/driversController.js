const fs = require('fs').promises;
const path = require('path');
const driverDataPath = path.join(__dirname, '../data/drivers.json');

// Controller function to get drivers and render the page
async function getDrivers(req, res, next) {
  try {
    const data = await fs.readFile(driverDataPath, 'utf8');
    const drivers = JSON.parse(data);

    // Log data to ensure it's being read properly
    console.log(drivers);

    // Passing the drivers data to the EJS view
    res.render('driver', { drivers });  // Pass 'drivers' as an object
  } catch (error) {
    next(error);  // Error handling
  }
}

module.exports = { getDrivers };

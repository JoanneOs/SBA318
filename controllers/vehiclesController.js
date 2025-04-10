const vehicles = require('../data/vehicles.json');


const getVehicles = (req, res) => {
    // Add query filtering right away
    let results = vehicles;
    if (req.query.status) {
      results = results.filter(v => v.status === req.query.status);
    }
    res.json(results);
  };


module.exports = { getVehicles };

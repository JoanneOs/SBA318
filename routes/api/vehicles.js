// const express = require('express');
// const router = express.Router();
// const { 
//   getVehicles,
//   createVehicle,
//   updateVehicle,
//   deleteVehicle
// } = require('../../controllers/vehiclesController');


// router.route('/')
//   .get(getVehicles)
//   .post(createVehicle);

// router.route('/:id')
//   .put(updateVehicle)
//   .delete(deleteVehicle);

// module.exports = router;

const express = require('express');
const router = express.Router();

const vehiclesController = require('../../controllers/vehiclesController');

// This is the line that caused the error earlier
router.post('/add', vehiclesController.addVehicle); // ✅ This must be a real function

module.exports = router;


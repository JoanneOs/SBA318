const express = require('express');
const router = express.Router();
const { 
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle
} = require('../../controllers/vehiclesController');


router.route('/')
  .get(getVehicles)
  .post(createVehicle);

router.route('/:id')
  .put(updateVehicle)
  .delete(deleteVehicle);

module.exports = router;

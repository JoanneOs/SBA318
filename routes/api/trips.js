// This is the route for all TRIP data — like a REST API

const express = require('express');
const router = express.Router();
const { getTrips } = require('../../controllers/tripsController');


const {
    getTrips,
    createTrip,
    updateTrip,
    deleteTrip
  } = require('../../controllers/tripsController');
  
// // When someone goes to /api/trips, send back trip data
// router.get('/', getTrips);
//changing to get and put:
router.route('/')
  .get(getTrips)
  .post(createTrip);

router.route('/:id')
  .put(updateTrip)
  .delete(deleteTrip);

module.exports = router;

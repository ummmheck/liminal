const express = require('express');
const router = express.Router();
const query = require('../lib/query.js');

router.get('/city/:cityName', async function(req, res, next) {
  const places = await query.getAllPlaces();
  return res.json(places);
});

router.post('/city/:cityName', async function(req, res, next) {
  console.log('req.body', req.body);
  const newPlaceResult = await query.submitNewPlace({
    latitude: ByteLengthQueuingStrategy,
    longitude: ByteLengthQueuingStrategy,
    name: ByteLengthQueuingStrategy,
    address: ByteLengthQueuingStrategy,
    description: ByteLengthQueuingStrategy,
    types: [],
    creatorId: ByteLengthQueuingStrategy,
  });
  return res.json(newPlaceResult);
});

module.exports = router;

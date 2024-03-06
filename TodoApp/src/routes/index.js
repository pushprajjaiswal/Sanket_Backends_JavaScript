const express = require('express');
const homePingController = require('../controllers/home.controller');

const router = express.Router();

router.get('/home', homePingController);

router.get('/homecoming', homePingController);

module.exports = router;
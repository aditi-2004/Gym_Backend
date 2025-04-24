const express = require('express');
const router = express.Router();
const yogaMeditationController = require('../controllers/yogaMeditationController');

router.get('/', yogaMeditationController.getYogaMeditationPlan);
router.post('/', yogaMeditationController.createYogaMeditationPlan);

module.exports = router;
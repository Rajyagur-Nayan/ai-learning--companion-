const express = require('express');
const router = express.Router();
const {
  getMonthlyScores,
  getAverageScoreByTopic,
  getQuizHistory,
} = require('../../controllers/profileController.js');

// GET /profile/monthly-scores/:userId
router.get('/monthly-scores/:userId', getMonthlyScores);

// GET /profile/topic-averages/:userId
router.get('/topic-averages/:userId', getAverageScoreByTopic);

// GET /profile/history/:userId
router.get('/history/:userId', getQuizHistory);

module.exports = router;

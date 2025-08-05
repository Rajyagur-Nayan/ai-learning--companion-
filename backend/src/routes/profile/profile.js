const express = require('express');
const router = express.Router();
const isLoggedIn = require('../../middelwear/login.js')

// GET /profile/monthly-scores/:userId
router.get('/monthly-scores', isLoggedIn, async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await pool.query(
      `SELECT topic, ROUND(AVG(score)) AS average_score
       FROM quizzes
       WHERE user_id = $1
       GROUP BY topic
       ORDER BY average_score DESC`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Topic average error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /profile/topic-averages/:userId
router.get('/topic-averages', isLoggedIn, async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await pool.query(
      `SELECT topic, ROUND(AVG(score)) AS average_score
       FROM quizzes
       WHERE user_id = $1
       GROUP BY topic
       ORDER BY average_score DESC`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Topic average error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /profile/history/:userId
router.get('/history', isLoggedIn, async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await pool.query(
      `SELECT title AS quiz_name, taken_at AS date, score, total
       FROM quizzes
       WHERE user_id = $1
       ORDER BY taken_at DESC`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Quiz history error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

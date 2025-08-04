const express = require('express');
const router = express.Router();
const pool = require('../../connections/DB.connect.js');
const getGeminiResponse = require('../../controllers/gemini.js');
const parseProjectIdeasResponse = require('../../controllers/responsQuiz.js')
const isLoggedIn = require('../../middelwear/login.js')
const generateQuizQuestions = require('../../controllers/quiz.controllers.js')

router.get('/', isLoggedIn, async (req, res) => {
  const user_id = req.user.id;

  if (!user_id) return res.status(400).json({ error: 'user_id is required' });

  try {
    // Step 1: Get user's role/name
    const userResult = await pool.query('SELECT name FROM users WHERE id = $1', [user_id]);
    if (userResult.rowCount === 0) return res.status(404).json({ error: 'User not found' });

    const title = userResult.rows[0].name;

    // Step 2: Get random topic from roadmap
    const topicResult = await pool.query(
      'SELECT title FROM roadmap_topics WHERE user_id = $1 ORDER BY RANDOM() LIMIT 1',
      [user_id]
    );
    const topic = topicResult.rows[0]?.title || 'General';

    // Step 3: Insert into quizzes
    const quizInsert = await pool.query(
      'INSERT INTO quizzes (user_id, title, topic , score, total) VALUES ($1, $2, $3, 0, 0) RETURNING id',
      [user_id, title, topic]
    );

    const quizId = quizInsert.rows[0].id;

    const result = await generateQuizQuestions(title, topic);
    res.json({ message: 'Quiz created', quiz_id: quizId, title, topic, result });
  } catch (err) {
    console.error('Error creating quiz:', err);
    res.status(500).json({ error: 'Failed to create quiz' });
  }
});

module.exports = router;
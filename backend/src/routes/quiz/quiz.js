// src/routes/quiz/quiz.js
const express = require('express');
const router = express.Router();
const getGeminiResponse = require('../../controllers/gemini.js')
const pool = require('../../connections/DB.connect.js')

// 1️⃣ Route: Generate quiz
router.get('/', async (req, res) => {
  try {
    const questions = [];

    for (let i = 0; i < 10; i++) {
      const prompt = `Generate one multiple choice question on general knowledge in JSON format with 4 options and one correctAnswer.`;
      const result = await getGeminiResponse(prompt);

      const parsed = JSON.parse(result);
      questions.push(parsed);
    }

    res.json({ questions });
  } catch (err) {
    console.error('Error generating quiz:', err);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});


// 2️⃣ Route: Submit quiz result
router.post('/:id/submit', async (req, res) => {
  const quizId = req.params.id;
  const { score } = req.body;

  if (!score) return res.status(400).json({ error: 'Score is required' });

  try {
    await pool.query(
      'UPDATE quizzes SET score = $1, taken_at = CURRENT_TIMESTAMP WHERE id = $2',
      [score, quizId]
    );

    res.json({ message: 'Quiz score updated successfully' });
  } catch (err) {
    console.error('Error updating score:', err);
    res.status(500).json({ error: 'Failed to update quiz score' });
  }
});

module.exports = router;

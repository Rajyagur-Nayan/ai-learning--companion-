// src/routes/quiz/quiz.js
const express = require('express');
const router = express.Router();
const { generateQuizQuestion } = require('../../routes/quiz/geminiService.js');

// Generate one question on a topic
router.get('/generate', async (req, res) => {
  const topic = req.query.topic || 'computer basics';

  try {
    const questionData = await generateQuizQuestion(topic);
    res.json(questionData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating question' });
  }
});

module.exports = router;

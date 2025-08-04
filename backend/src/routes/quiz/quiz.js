// src/routes/quiz/quiz.js
const express = require('express');
const router = express.Router();
const getGeminiResponse = require('../../controllers/gemini.js')

// Generate one question on a topic
router.get('/generate', async (req, res) => {
  const topic = req.query.topic || 'computer basics';

  try {
    const prompt = `Generate one multiple choice question with 4 options and clearly indicate the correct option. Topic: ${topic}. Format like:
{
  "question": "What is...",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "B"
}`
const result = await getGeminiResponse(prompt)
    console.log(result);
    res.send('your respons in console')
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating question' });
  }
});

module.exports = router;

// src/rotes/quiz/geminiService.js
const axios = require('axios');
require('dotenv').config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function generateQuizQuestion(topic) {
  const requestData = {
    contents: [
      {
        parts: [
          {
            text: `Generate one multiple choice question with 4 options and clearly indicate the correct option. Topic: ${topic}. Format like:
{
  "question": "What is...",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "B"
}`
          }
        ]
      }
    ]
  };

  const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, requestData);
  const content = response.data.candidates[0].content.parts[0].text;

  return JSON.parse(content);
}

module.exports = { generateQuizQuestion };

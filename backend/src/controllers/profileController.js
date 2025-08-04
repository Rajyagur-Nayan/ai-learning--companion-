const pool = require('../../src/connections/DB.connect.js');

// 1. Monthly Scores
exports.getMonthlyScores = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      `SELECT 
         TO_CHAR(taken_at, 'Mon') AS month,
         EXTRACT(MONTH FROM taken_at) AS month_number,
         ROUND(AVG(score)) AS average_score
       FROM quizzes
       WHERE user_id = $1
       GROUP BY month, month_number
       ORDER BY month_number`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Monthly scores error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// 2. Average Score by Topic
exports.getAverageScoreByTopic = async (req, res) => {
  const { userId } = req.params;
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
};

// 3. Quiz History
exports.getQuizHistory = async (req, res) => {
  const { userId } = req.params;
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
};

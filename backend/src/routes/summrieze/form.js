const express = require('express');
const { generateToken, verifyToken } = require('../../utils/jwt.js');
const { hashPassword, comparePassword } = require('../../utils/hash.js');
const generateOTP = require('../../controllers/createOTP.controllers.js');
const pool = require('../../connections/DB.connect.js');
const generatePrompt = require('../../controllers/prompt.js');
const getGeminiResponse = require('../../controllers/gemini.js');
const parseProjectIdeasResponse = require('../../controllers/respons.js')
require('dotenv').config();
const isLoggedIn = require('../../middelwear/login.js')

const router = express.Router();
router.get('/', isLoggedIn, async (req, res) => {
    const user_id = req.user.id;
    const result = await pool.query(
        'SELECT title, detail FROM roadmap_topics WHERE user_id = $1',
        [user_id]
    );

    res.json({
        data: result,
    });

})
router.post('/', isLoggedIn, async (req, res) => {
    try {
        const user_id = req.user.id;
        const { role, languages, description } = req.body;

        // Basic validation
        if (!role || !languages) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const prompt = generatePrompt(role, languages, description);
        const reply = await getGeminiResponse(prompt);
        const parsed = await parseProjectIdeasResponse(reply);

        const values = parsed
            .map(t => `('${user_id}', '${t.title.replace(/'/g, "''")}', '${t.detail.replace(/'/g, "''")}')`)
            .join(',\n  ');

        const insertQuery = `
INSERT INTO roadmap_topics (user_id, title, detail)
VALUES
  ${values};
`;

        await pool.query(insertQuery)
        res.json({
            role: role,
            data: parsed,
        });

    } catch (err) {
        console.error('Error in /form:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router
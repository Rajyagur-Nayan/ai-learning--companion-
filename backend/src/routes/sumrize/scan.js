const express = require('express');
const { generateToken, verifyToken } = require('../../utils/jwt.js');
const { hashPassword, comparePassword } = require('../../utils/hash.js');
const generateOTP = require('../../controllers/createOTP.controllers.js');
const pool = require('../../connections/DB.connect.js');
const generatePrompt = require('../../controllers/prompt.js');
const getGeminiResponse = require('../../controllers/gemini.js');
const parseGeminiResponse = require('../../controllers/respons.js')
require('dotenv').config();
const multer = require('multer');
const path = require('path');
const { Result } = require('pg');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // const login_token = req.cookies.login_token;

        const { medicine_name, medicine_code, image_link } = req.body;
        const code = medicine_code || null;

        // Basic validation
        if (!medicine_name || !image_link) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // if (!login_token) {
        //     return res.status(400).json({ error: 'you are not login' });
        // }

        const data = verifyToken(login_token);
        console.log(data);

        const prompt = generatePrompt(medicine_name, image_link, code);
        const reply = await getGeminiResponse(prompt);
        const parsed = parseGeminiResponse(reply);

        console.log(output)
        res.json({
            medicine_name: medicine_name,
            data: parsed,
        });

    } catch (err) {
        console.error('Error in /verify-medicine:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router
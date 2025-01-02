require('dotenv').config();

const config = {
    apiUrl: 'http://localhost:3000',
    GEMINI_AI_TOKEN: process.env.GEMINI_AI_TOKEN,
    PORT: process.env.PORT || 3000,
};

module.exports = config;
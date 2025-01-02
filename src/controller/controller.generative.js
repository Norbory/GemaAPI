const express = require('express');
const router = express.Router();

const GenerativeDTO = require('../DTO/dto.generative');

const generativeDTO = new GenerativeDTO();

router.post('/generate', async (req, res) => {
    const duda = req.body;
    try {
        if (!duda || !duda.prompt) {
            return res.status(400).json({ message: 'Invalid request, prompt is required' });
        }
        console.log(duda.prompt);
        const result = await generativeDTO.getResponseFromPrompt(duda.prompt);
        return res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
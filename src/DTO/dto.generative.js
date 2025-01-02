const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_AI_TOKEN } = require("../config");

const genAI = new GoogleGenerativeAI(GEMINI_AI_TOKEN);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

class GenerativeDTO {
  async getResponseFromPrompt(prompt) {
    try {
        const result = await model.generateContent(prompt);
        return result;
    } catch (error) {
        error.message = "Error generating content from prompt: " + error.message
        return error;
    }
  }
}

module.exports = GenerativeDTO;
import { generateWithAI } from "../services/aiService.js";
import { buildPrompt } from "../utils/promptBuilder.js";
export const generateContent = async (req, res) => {
  try {
    const { text, type } = req.body;

    console.log("Received Request:");
    console.log("Type:", type);
    console.log("Text:", text);

    const prompt = buildPrompt(text, type);

    // ✅ Call Gemini
    const aiResponse = await generateWithAI(prompt);

    console.log("Gemini Response:");
    console.log(aiResponse);

    res.status(200).json({
      success: true,
      data: aiResponse,
    });
  } catch (error) {
    console.error("Controller Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

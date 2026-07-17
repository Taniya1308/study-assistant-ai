import { generateWithAI } from "../services/aiService.js";
import { buildPrompt } from "../utils/promptBuilder.js";
import { cleanJSON } from "../utils/cleanJSON.js";
import { flashcardSchema } from "../schemas/flashcardSchema.js";
import { quizSchema } from "../schemas/quizSchema.js";

export const generateContent = async (req, res) => {
  try {
    const { text, type } = req.body;

    console.log("Received Request:");
    console.log("Type:", type);
    console.log("Text:", text);

    const prompt = buildPrompt(text, type);

    // ✅ Call Gemini
    const aiResponse = await generateWithAI(prompt);

    const cleaned = cleanJSON(aiResponse);

    const parsed = JSON.parse(cleaned);

    if (type === "flashcards") {
      flashcardSchema.parse(parsed);
    }

    if (type === "quiz") {
      quizSchema.parse(parsed);
    }

    console.log("Gemini Response:");
    console.log(aiResponse);

    res.status(200).json({
      success: true,
      data: parsed,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

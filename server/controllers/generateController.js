import { generateWithAI } from "../services/aiService.js";
export const generateContent = async (req, res) => {
  try {
    const { text, type } = req.body;

    console.log("Received Request:");
    console.log("Type:", type);
    console.log("Text:", text);

    const prompt = `
You are an AI Study Assistant.

Generate 5 flashcards.

Return ONLY valid JSON.

Schema:

{
  "flashcards": [
    {
      "question": "",
      "answer": ""
    }
  ]
}

Rules:
- Return only JSON.
- No markdown.
- No explanation.
- No code fences.

Topic:
${text}
`;

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

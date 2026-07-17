export const buildPrompt = (text, type) => {
  if (type === "flashcards") {
    return `
You are an AI Study Assistant.

Generate exactly 5 flashcards.

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
- Questions should be short.
- Answers should be clear.

Topic:
${text}
`;
  }

  if (type === "quiz") {
    return `
You are an AI Study Assistant.

Generate exactly 5 multiple-choice questions.

Return ONLY valid JSON.

Schema:

{
  "quiz": [
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "correctAnswer": ""
    }
  ]
}

Rules:
- Return only JSON.
- No markdown.
- No explanation.
- No code fences.
- Exactly 4 options.

Topic:
${text}
`;
  }

  throw new Error("Invalid content type");
};

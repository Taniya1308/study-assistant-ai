export const cleanJSON = (text) => {
  if (!text || typeof text !== "string") {
    throw new Error("Empty AI response");
  }

  // Remove markdown code fences
  let cleaned = text.replace(/```json/g, "");
  cleaned = cleaned.replace(/```/g, "");

  // Trim whitespace
  cleaned = cleaned.trim();

  // Find first '{' and last '}'
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON object found in AI response");
  }

  cleaned = cleaned.substring(start, end + 1);

  return cleaned;
};

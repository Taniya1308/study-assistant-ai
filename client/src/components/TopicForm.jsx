import { useState } from "react";
import { generateContent } from "../services/api";

const TopicForm = ({ setFlashcards, setQuiz }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("flashcards");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (text.trim() === "") {
      alert("Please enter a topic or study notes.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await generateContent({
        text,
        type,
      });

      console.log("Response:", response);

      if (type === "flashcards") {
        setFlashcards(response.data.flashcards || []);
        setQuiz([]);
      } else {
        setQuiz(response.data.quiz || []);
        setFlashcards([]);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to generate content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <label className="block text-lg font-bold mb-2">Paste your notes</label>

      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your study notes or topic..."
        className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-6">
        <label className="block font-semibold mb-2">Content Type</label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-xl px-4 py-3 w-full md:w-72"
        >
          <option value="flashcards">Flashcards</option>
          <option value="quiz">Quiz</option>
        </select>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl w-full md:w-auto disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && (
        <div className="mt-4 bg-red-100 text-red-700 border border-red-300 p-3 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
};

export default TopicForm;

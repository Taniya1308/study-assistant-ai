import { useState } from "react";
import { generateContent } from "../services/api";

const TopicForm = ({ setFlashcards, setQuiz }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("flashcards");

  const handleGenerate = async () => {
    try {
      const response = await generateContent({
        text: text,
        type: type,
      });

      console.log(response.data);
      if (type === "flashcards") {
        setFlashcards(response.data.data.flashcards || []);
        setQuiz(response.data.data.quiz || []);
        setQuiz([]);
      } else {
        setQuiz(response.data.quiz || []);
        setFlashcards([]);
      }
    } catch (error) {
      console.error("Error calling backend:");
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <label className="block font-semibold mb-2">Paste your notes</label>

      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your study notes or topic..."
        className="w-full border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-6">
        <label className="block font-semibold mb-2">Content Type</label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-60"
        >
          <option value="flashcards">Flashcards</option>

          <option value="quiz">Quiz</option>
        </select>
      </div>

      <button
        onClick={handleGenerate}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full md:w-auto"
      >
        Generate
      </button>
    </div>
  );
};

export default TopicForm;

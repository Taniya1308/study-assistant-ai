import { useState } from "react";

const Quiz = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Quiz</h2>

      <h3 className="text-xl font-semibold">
        {quiz[currentQuestion].question}
      </h3>

      <div className="mt-6 space-y-3">
        {quiz[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="w-full border rounded-lg p-3 hover:bg-blue-100 text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

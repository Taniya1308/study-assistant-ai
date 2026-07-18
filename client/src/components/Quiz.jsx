import { useState } from "react";

const Quiz = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  // Prevent crash if quiz is empty
  if (!quiz || quiz.length === 0) {
    return <div className="text-center mt-10">No quiz available.</div>;
  }

  const submitAnswer = () => {
    if (selectedAnswer === "") {
      alert("Please select an answer!");
      return;
    }

    if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
      setWrongQuestions([...wrongQuestions, quiz[currentQuestion]]);
    }

    if (currentQuestion === quiz.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold">Quiz Finished 🎉</h2>

        <p className="mt-6 text-xl">Your Score</p>

        <h1 className="text-5xl font-bold mt-4">
          {score} / {quiz.length}
        </h1>
      </div>
    );
  }

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
            onClick={() => setSelectedAnswer(option)}
            className={`w-full border rounded-lg p-3 text-left ${
              selectedAnswer === option
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={submitAnswer}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;

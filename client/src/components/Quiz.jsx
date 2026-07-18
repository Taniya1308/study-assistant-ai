import { useState, useEffect } from "react";

const Quiz = ({ quiz }) => {
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  // Update quiz whenever parent sends a new quiz
  useEffect(() => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setWrongQuestions([]);
  }, [quiz]);

  if (!currentQuiz || currentQuiz.length === 0) {
    return <div className="text-center mt-10">No quiz available.</div>;
  }

  const submitAnswer = () => {
    if (selectedAnswer === "") {
      alert("Please select an answer!");
      return;
    }

    if (selectedAnswer === currentQuiz[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongQuestions((prev) => [...prev, currentQuiz[currentQuestion]]);
    }

    if (currentQuestion === currentQuiz.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    }
  };

  const retestWrongAnswers = () => {
    if (wrongQuestions.length === 0) {
      alert("Perfect! You answered every question correctly.");
      return;
    }

    setCurrentQuiz(wrongQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setWrongQuestions([]);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold">Quiz Finished 🎉</h2>

        <p className="mt-6 text-xl">Your Score</p>

        <h1 className="text-5xl font-bold mt-4">
          {score} / {currentQuiz.length}
        </h1>

        <button
          onClick={retestWrongAnswers}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Retest Wrong Answers
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Quiz</h2>

      <p className="mb-4 text-gray-500">
        Question {currentQuestion + 1} of {currentQuiz.length}
      </p>

      <h3 className="text-xl font-semibold">
        {currentQuiz[currentQuestion].question}
      </h3>

      <div className="mt-6 space-y-3">
        {currentQuiz[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={`w-full border rounded-lg p-3 text-left transition ${
              selectedAnswer === option
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={submitAnswer}
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;

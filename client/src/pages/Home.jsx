import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicForm from "../components/TopicForm";
import EmptyState from "../components/EmptyState";
import FlashcardList from "../components/FlashcardList";

const Home = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [quiz, setQuiz] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <TopicForm setFlashcards={setFlashcards} setQuiz={setQuiz} />

      {flashcards.length > 0 ? (
        <FlashcardList flashcards={flashcards} />
      ) : quiz.length > 0 ? (
        <Quiz quiz={quiz} />
      ) : (
        <EmptyState />
      )}

      <Footer />
    </div>
  );
};

export default Home;

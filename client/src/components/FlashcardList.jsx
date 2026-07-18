const FlashcardList = ({ flashcards }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Generated Flashcards
      </h2>

      {flashcards.map((card, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <h3 className="text-blue-600 font-bold">Question</h3>

          <p className="mt-2">{card.question}</p>

          <hr className="my-4" />

          <h3 className="text-green-600 font-bold">Answer</h3>

          <p className="mt-2">{card.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;

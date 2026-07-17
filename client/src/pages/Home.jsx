import Header from "../components/Header";
import TopicForm from "../components/TopicForm";
import EmptyState from "../components/EmptyState";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <TopicForm />

        <EmptyState />
      </main>
    </div>
  );
};

export default Home;

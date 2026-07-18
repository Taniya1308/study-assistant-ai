const Loading = () => {
  return (
    <div className="text-center mt-10">
      <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600 mx-auto"></div>

      <p className="mt-4 text-lg font-semibold">Generating content...</p>
    </div>
  );
};

export default Loading;

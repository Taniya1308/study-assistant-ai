const ErrorMessage = ({ message }) => {
  return (
    <div className="max-w-xl mx-auto mt-6 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
      {message}
    </div>
  );
};

export default ErrorMessage;

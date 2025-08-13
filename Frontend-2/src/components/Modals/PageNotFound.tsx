const NotFoundModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto shadow-xl text-center">
        {/* 404 SVG Icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-32 h-32 text-pink-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or might have been
          moved.
        </p>

        {/* Back to Home Button */}
        <a
          href="/home"
          className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out font-medium"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundModal;

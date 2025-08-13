import { useNavigate } from "react-router-dom";

const EmptyCartModal = () => {
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-center mb-6">
          <svg
            className="w-20 h-20 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any items to your cart yet. Start
            shopping to add items!
          </p>
          <button
            className="bg-pink-500 px-8 py-2 rounded-full text-white hover:bg-pink-600 transition duration-300 ease-in-out"
            onClick={handleRedirect}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartModal;

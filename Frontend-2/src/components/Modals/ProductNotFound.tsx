import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-24 w-24 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but we couldn't find the product you're looking for. It
          may have been removed or doesn't exist.
        </p>
        <div className="space-y-4">
          <button
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
          <button
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
            onClick={() => (window.location.href = "/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductsNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white px-4">
      <div className="text-center">
        <svg
          className="mx-auto h-24 w-24 text-gray-400 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          No Products Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find any products matching your criteria. Try adjusting
          your filters or check back later for new arrivals.
        </p>
        <div className="space-y-4">
          <button
            className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
          <button
            className="block mx-auto text-pink-500 hover:underline mt-4"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

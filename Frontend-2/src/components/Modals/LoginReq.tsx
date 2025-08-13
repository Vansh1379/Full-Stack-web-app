import React, { useState } from "react";

interface LoginRequiredModalProps {
  onRedirectHome: () => void;
}

const LoginRequiredModal: React.FC<LoginRequiredModalProps> = ({
  onRedirectHome,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-pink-50 w-96 p-8 rounded-xl shadow-2xl text-center border-2 border-pink-200">
        <div className="text-6xl mb-5 text-pink-500">🔒</div>
        <h2 className="text-2xl font-bold text-pink-700 mb-4">
          Login Required
        </h2>
        <p className="text-gray-600 mb-6">
          You need to log in first to view your orders. Please return to the
          home page to sign in.
        </p>
        <button
          onClick={onRedirectHome}
          className="w-full py-3 bg-pink-500 text-white font-bold rounded-lg 
                     hover:bg-pink-600 transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

interface OrdersPageProps {}

const LoginReq: React.FC<OrdersPageProps> = () => {
  const [isLoggedIn] = useState<boolean>(false);

  const handleRedirectHome = () => {
    window.location.href = "/";
  };

  if (!isLoggedIn) {
    return <LoginRequiredModal onRedirectHome={handleRedirectHome} />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Your Orders</h1>
    </div>
  );
};

export default LoginReq;

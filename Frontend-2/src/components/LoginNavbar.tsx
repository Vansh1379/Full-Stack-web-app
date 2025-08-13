import React, { useEffect, useState } from "react";
import shoppr from "../assets/Shoppr.png";
import { useNavigate } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { ProfileModal } from "./Modals/ProfileModal";

interface CustomJwtPayload extends JwtPayload {
  data?: string;
}

export const LoginNavbar: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(storedToken);
        setUserId(decodedToken.data || null);
      } catch (error) {
        console.error(`This is error in loginNavbar ${error}`);
      }
    }
  }, []);

  const redirect2 = () => {
    navigate("/home");
  };

  const redirect3 = () => {
    if (userId) {
      navigate(`/cart/${userId}`);
    }
  };

  const handleProfileModal = (): void => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="border-b-4 border-gray-300 flex items-center h-16 ">
        <div className="flex items-center ml-10">
          <div onClick={redirect2} className="cursor-pointer">
            <img src={shoppr} alt="shoppr" className="h-24" />
          </div>
          <div className="flex pl-8 cursor-pointer">
            <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">
              Catagories
            </div>
            <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">
              Brands
            </div>
            <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">
              Beauty Advice
            </div>
          </div>
          <div className="flex items-center bg-gray-100  pl-2  rounded-md ml-44">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 pt-1 mr-2 border-non hover:text-pink-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Type here to search..."
              className="bg-gray-100 pl-3 pr-16 py-2 border-none hover:bg-gray-200 text-pink-500"
            />
          </div>
        </div>

        <div className="ml-4 flex items-center">
          <div>
            <button
              className="bg-pink-600 text-base text-white font-semibold px-3 py-2 border-gray-400 border rounded-md"
              onClick={handleProfileModal}
            >
              Profile
            </button>
          </div>
          <div className="ml-10 cursor-pointer" onClick={redirect3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-screen overflow-hidden relative h-6 bg-yellow-500 ">
        <pre className="absolute whitespace-nowrap animate-running-text text-md font-semibold text-white">
          || Free Shipping on All Orders Above ₹299 || Free Shipping on All
          Orders Above ₹299 || Free Shipping on All Orders Above ₹299 || Free
          Shipping on All Orders Above ₹299 ||
        </pre>
      </div>
      {isModalOpen && <ProfileModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

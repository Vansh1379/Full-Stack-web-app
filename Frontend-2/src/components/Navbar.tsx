import React, { useState } from "react";
import shoppr from "../assets/Shoppr.png";
import { useNavigate } from "react-router-dom";
import { SigninModal } from "./Modals/SigninModal";
import { toast, Toaster } from "sonner";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileOpen, setisMobileOpen] = useState(false);

  const redirect = () => {
    setIsModalOpen(true);
  };

  const redirect2 = () => {
    navigate("/home");
  };

  const redirect3 = () => {
    const errorToast = toast.error("Please Login First", {
      style: {
        background: "#ef4444",
        color: "white",
      },
      duration: 3000,
    });
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    toast.dismiss(errorToast);
  };

  const toggleMobileMenu = () => {
    setisMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <div className="border-b-4 border-gray-300  md:flex items-center h-auto md:h-16 relative ">
        <Toaster position="top-center" richColors />

        <div className="flex items-center justify-between w-full md:w-auto px-4 md:px-0  md:ml-10 py-3 md:py-0 ">
          <div onClick={redirect2} className="cursor-pointer">
            <img src={shoppr} alt="Shoppr" className=" h-14 md:h-24" />
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMobileOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto items-start md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:pl-8 w-full md:w-auto px-4 md:px-0 cursor-pointer">
            <div className="text-base text-black font-semibold py-3 md:py-0  md:m-0 md:p-8 hover:text-pink-500 cursor-pointer">
              Catagories
            </div>
            <div className="text-base text-black font-semibold py-3 md:py-0  md:m-0 md:p-8 hover:text-pink-500 cursor-pointer">
              Brands
            </div>
            <div className="text-base text-black font-semibold py-3 md:py-0  md:m-0 md:p-8 hover:text-pink-500 cursor-pointer">
              Beauty Advice
            </div>
          </div>

          <div className="flex items-center bg-gray-100 pl-2 rounded-md w-full md:w-auto my-3 md:my-0 md:ml-8 lg:ml-44">
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
              className="bg-gray-100 pl-3  pr-4 md:pr-16 py-2 border-none hover:bg-gray-200 text-pink-500 w-full"
            />
          </div>

          <div className="flex items-center w-full md:w-auto justify-between md:justify-start px-4 md:px-0 py-3 md:py-0 md:ml-4">
            <div>
              <button
                className="bg-pink-600 text-base text-white font-semibold px-3 py-2 border-gray-400 border rounded-md"
                onClick={redirect}
              >
                Sign in
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
      </div>

      <div className="w-screen overflow-hidden relative h-6 bg-yellow-500 ">
        <pre className="absolute whitespace-nowrap animate-running-text text-md font-semibold text-white">
          || Free Shipping on All Orders Above ₹299 || Free Shipping on All
          Orders Above ₹299 || Free Shipping on All Orders Above ₹299 || Free
          Shipping on All Orders Above ₹299 ||
        </pre>
      </div>
      {isModalOpen && <SigninModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

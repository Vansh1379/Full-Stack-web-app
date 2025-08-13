import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

interface ProfileModalProps {
  onClose: () => void;
}

interface CustomJwtPayload extends JwtPayload {
  data?: string;
}

interface UserDetails {
  name: string;
  email: string;
  phone_no: string;
  address: string;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [userid, setUserId] = useState<string | undefined>();
  const [UserDetails, setUserDetails] = useState<UserDetails>();

  const handleOrdersClick = () => {
    toast.success("Redirecting to orders...", {
      style: {
        background: "#22c55e",
        color: "white",
      },
    });
    navigate("/orders");
    onClose();
  };

  useEffect(() => {
    const GetUserId = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const UserId = jwtDecode<CustomJwtPayload>(token);
          setUserId(UserId.data);
        }
      } catch (error) {
        console.error(`Error decoding token: ${error}`);
      }
    };

    GetUserId();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (userid) {
        try {
          const response = await axios.get(
            `https://shoppr.onrender.com/api/v1/${userid}`
          );
          setUserDetails(response.data.data);
        } catch (error) {
          console.error(`Error fetching user details: ${error}`);
        }
      }
    };

    fetchUserDetails();
  }, [userid]);

  const handleLogoutLogic = (): void => {
    localStorage.clear();
    toast.error("Logged out successfully", {
      style: {
        background: "#ef4444",
        color: "white",
      },
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Toaster position="top-center" richColors />
      <div className="bg-white rounded-lg shadow-lg p-5 w-[600px] mx-4">
        <div className="flex justify-between items-center mb-4 border-b border-pink-100 pb-3">
          <h2 className="text-lg font-semibold text-gray-800">My Profile</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="bg-pink-500 rounded-full p-2 w-16 h-16 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>

          <div className="flex-grow grid grid-cols-2 gap-4">
            <div className="bg-pink-50 p-3 rounded-md hover:bg-pink-100 transition-colors">
              <p className="text-xs text-pink-500 font-medium mb-1">Name</p>
              <p className="text-sm text-gray-800">{UserDetails?.name}</p>
            </div>

            <div className="bg-pink-50 p-3 rounded-md hover:bg-pink-100 transition-colors">
              <p className="text-xs text-pink-500 font-medium mb-1">Email</p>
              <p className="text-sm text-gray-800 truncate">
                {UserDetails?.email}
              </p>
            </div>

            <div className="bg-pink-50 p-3 rounded-md hover:bg-pink-100 transition-colors">
              <p className="text-xs text-pink-500 font-medium mb-1">Phone</p>
              <p className="text-sm text-gray-800">{UserDetails?.phone_no}</p>
            </div>

            <div className="bg-pink-50 p-3 rounded-md hover:bg-pink-100 transition-colors">
              <p className="text-xs text-pink-500 font-medium mb-1">Address</p>
              <p className="text-sm text-gray-800 truncate">
                {UserDetails?.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-evenly ml-16">
          <button
            className="text-red-400 font-medium border rounded text-sm px-4 py-2 mr-40 hover:bg-red-500 hover:text-black transition-colors"
            onClick={handleLogoutLogic}
          >
            LOG OUT
          </button>
          <button
            type="button"
            onClick={handleOrdersClick}
            className="bg-pink-500 text-white text-sm font-medium px-4 py-2  ml-24 rounded hover:bg-pink-600 transition-colors flex items-center space-x-1"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span>View Orders</span>
          </button>
        </div>
      </div>
    </div>
  );
};

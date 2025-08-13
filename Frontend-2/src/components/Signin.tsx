import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

interface SignupInputs {
  name: string;
  email: string;
  phone_no: string;
  address: string;
  password: string;
}

export const Signin = () => {
  const navigate = useNavigate();

  const [signupInputs, setSignupInputs] = useState<SignupInputs>({
    name: "",
    email: "",
    phone_no: "",
    address: "",
    password: "",
  });

  const RedirectToHome = (): void => {
    navigate("/home");
  };

  const RedirectToLogin = (): void => {
    navigate("/login");
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignupInputs({ ...signupInputs, name: event.target.value });
  };

  const handleEmailChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInputs({ ...signupInputs, email: event.target.value });
  };

  const handlePhoneNo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupInputs({ ...signupInputs, phone_no: event.target.value });
  };

  const handleAdderess = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupInputs({ ...signupInputs, address: event.target.value });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupInputs({ ...signupInputs, password: event.target.value });
  };

  const validateForm = (): boolean => {
    if (
      !signupInputs.name ||
      !signupInputs.email ||
      !signupInputs.phone_no ||
      !signupInputs.address ||
      !signupInputs.password
    ) {
      toast.error("Please fill in all fields", {
        style: {
          background: "#ef4444",
          color: "white",
        },
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupInputs.email)) {
      toast.error("Please enter a valid email address", {
        style: {
          background: "#ef4444",
          color: "white",
        },
      });
      return false;
    }

    // Basic phone number validation
    if (signupInputs.phone_no.length < 10) {
      toast.error("Please enter a valid phone number", {
        style: {
          background: "#ef4444",
          color: "white",
        },
      });
      return false;
    }

    return true;
  };

  const SigninBackendCall = async () => {
    if (!validateForm()) return;

    // Show loading toast
    const loadingToast = toast.loading("Creating your account...", {
      style: {
        background: "#f3f4f6",
        color: "#374151",
      },
    });

    try {
      const response = await axios.post(
        "https://shoppr.onrender.com/api/v1/signup",
        {
          name: signupInputs.name,
          email: signupInputs.email,
          phone_no: signupInputs.phone_no,
          address: signupInputs.address,
          password: signupInputs.password,
        }
      );

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.data.token) {
        // Show success toast
        toast.success("Account created successfully!", {
          style: {
            background: "#22c55e",
            color: "white",
          },
          description: "Welcome to Shoppr!",
          duration: 2000,
        });

        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error: any) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show error toast
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
        {
          style: {
            background: "#ef4444",
            color: "white",
          },
          duration: 3000,
        }
      );

      console.error(`Error during signup ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center mt-20">
      <Toaster position="top-center" richColors />
      <div className="h-[600px] w-96 bg-white rounded-3xl border-2 border-gray-300">
        <div className="flex items-center pt-5 border-b-2 pb-2 border-gray-200 mx-2 hover:text-red-600 ">
          <div className="pl-4 hover:text-red-600 " onClick={RedirectToHome}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="text-xl font-semibold text-gray-600 font-mono pl-24 hover:text-pink-600">
            Register
          </div>
        </div>

        <div className="flex items-center text-base mt-3 ml-24 cursor-pointer mb-10">
          <div>Already a user</div>
          <div className="pl-2 text-blue-600" onClick={RedirectToLogin}>
            Login?
          </div>
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 ml-10 text-base border-gray-200 w-72 focus:outline-none hover:border-pink-200"
            onChange={handleNameChange}
          />
        </div>
        <div className="mt-8">
          <input
            type="email"
            placeholder="E-mail"
            className="border-b-2 ml-10 text-base border-gray-200 w-72 focus:outline-none hover:border-pink-200"
            onChange={handleEmailChanges}
          />
        </div>
        <div className="mt-8">
          <input
            type="tel"
            placeholder="Phone-No"
            className="border-b-2 ml-10 text-base border-gray-200 w-72 focus:outline-none hover:border-pink-200"
            onChange={handlePhoneNo}
          />
        </div>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Address"
            className="border-b-2 ml-10 text-base border-gray-200 w-72 focus:outline-none hover:border-pink-200"
            onChange={handleAdderess}
          />
        </div>
        <div className="mt-8">
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 ml-10 text-base border-gray-200 w-72 focus:outline-none hover:border-pink-200"
            onChange={handlePassword}
          />
        </div>

        <div>
          <button
            className="bg-pink-500 text-white ml-20 px-20 py-2 rounded-md mt-16 hover:text-black"
            onClick={SigninBackendCall}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

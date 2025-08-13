import { useNavigate } from "react-router-dom";
import shoppr from "../assets/Shoppr.png";

export const Fotter = () => {
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate("/product");
  };
  return (
    <>
      <div className="flex items-center bg-gray-400 pb-5 mt-5 ">
        <div className="ml-10 mt-8">
          <div>
            <img src={shoppr} alt="Shoppr logo" className="h-[90px] w-[90px]" />
          </div>
          <div className="mt-3 cursor-pointer">
            <ul>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Who are we?
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Carrers
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Authencity
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Press
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Testimonials
              </li>
            </ul>
          </div>
        </div>
        <div className=" mx-16 mt-10 cursor-pointer">
          <div className="mb-5 text-sm font-medium ">Help</div>
          <div>
            <ul>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Contact us
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Store locater
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                cancellation & Return
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Shipping and Delivery
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Sell on Shoppr
              </li>
            </ul>
          </div>
        </div>
        <div className=" mx-16 mt-10 cursor-pointer">
          <div className="mb-5 text-sm font-medium ">Inspire Me</div>
          <div>
            <ul>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Buying Guides
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Beauty Book
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Shoppr Network
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Beauty Book
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Shoppr Network
              </li>
            </ul>
          </div>
        </div>
        <div className=" mx-16 mt-10 cursor-pointer" onClick={handleRedirect}>
          <div className="mb-5 text-sm font-medium ">Quick Links</div>
          <div>
            <ul>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Offer Zone
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                New launches
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Shoppr Fashion
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Shoppr Pro
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Shoppr Pro
              </li>
            </ul>
          </div>
        </div>
        <div className=" mx-16 mt-10 cursor-pointer" onClick={handleRedirect}>
          <div className="mb-5 text-sm font-medium ">Top Categories</div>
          <div>
            <ul>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Makeup
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Skin
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Body Care
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Technology
              </li>
              <li className="text-white font-normal text-sm py-1 hover:text-pink-500">
                Health
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-pink-500 h-14 text-white cursor-text ">
        <div className="flex items-center justify-center ">
          <p className="text-sm px-2">Terms & Conditions</p>
          <p className="text-sm px-2">Shipping Policy</p>
          <p className="text-sm px-2">Cancellation Policy</p>
          <p className="text-sm px-2">Privacy Policy</p>
        </div>
        <div className="text-sm flex items-center justify-center mt-3">
          © 2024 Shoppr LIMITED All Rights Reserved With{" "}
          <p className="font-semibold pl-1">Vansh Kalra</p>
        </div>
      </div>
    </>
  );
};

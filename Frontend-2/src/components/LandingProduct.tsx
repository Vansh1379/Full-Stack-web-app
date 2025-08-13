import { Product } from "./ProductDisplay";
import discount from "../assets/Discount.png";
import img4 from "../assets/img4.png";
import { useNavigate } from "react-router-dom";
import img5 from "../assets/img5.png";

export const LandingProduct = () => {
  const navigate = useNavigate();
  const redirect = (): void => {
    navigate("/product");
  };
  return (
    <div>
      <div className="flex justify-evenly mt-10 mb-3">
        <div className="mr-40">
          <div className="text-black text-3xl font-bold pr-80">Hot List</div>
        </div>
        <div className="flex items-center pl-80">
          <button
            className="text-pink-500 text-lg font-bold"
            onClick={redirect}
          >
            View List
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-pink-500 mx-2 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="border border-pink-500 h-7 w-10 bg-pink-100 font-medium text-pink-500 rounded-xl pl-2 ml-20">
        All
      </div>
      <div className="mt-10 ml-20">
        <Product />
      </div>
      <div className="mt-10 cursor-pointer">
        <img src={discount} alt="discount" />
      </div>
      <div onClick={redirect} className="mt-2 cursor-pointer">
        <img src={img4} alt="long image of products" />
      </div>
      <div onClick={redirect} className="px-5 mt-3 cursor-pointer">
        <img src={img5} alt="discount image" />
      </div>
    </div>
  );
};

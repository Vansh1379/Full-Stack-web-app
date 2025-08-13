import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { useNavigate } from "react-router-dom";
import navratre from "../assets/navratre.png";

export const LandingCompo = () => {
  const navigate = useNavigate();
  const Redirect = (): void => {
    navigate("/product");
  };
  return (
    <div className="bg-gray-100 max-w-screen overflow-hidden">
      <div className="flex items-center justify-evenly px-10 py-9 rounded-lg">
        <div onClick={Redirect} className="cursor-pointer">
          <img src={img1} alt="image1" />
        </div>
        <div onClick={Redirect} className="cursor-pointer">
          <img src={img2} alt="image2" />
        </div>
        <div onClick={Redirect} className="cursor-pointer">
          <img src={img3} alt="image3" />
        </div>
      </div>
      <div onClick={Redirect}>
        <img src={navratre} alt="navrate sale" />
      </div>
    </div>
  );
};

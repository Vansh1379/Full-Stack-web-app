import { useEffect, useState } from "react";
import { LoginNavbar } from "../components/LoginNavbar";
import { Navbar } from "../components/Navbar";
import LoginReq from "../components/Modals/LoginReq";
import NoOrdersModal from "../components/Modals/OrderEmpty";

export const Order = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="overflow-hidden">
      <div>{isloggedIn ? <LoginNavbar /> : <Navbar />}</div>
      <div>{!isloggedIn ? <LoginReq /> : <NoOrdersModal />}</div>
    </div>
  );
};

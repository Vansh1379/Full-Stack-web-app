import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ProductLanding } from "../components/ProductLanding";
import { useScrollbarStyles } from "../hooks/useScrollbarStyles";
import { LoginNavbar } from "../components/LoginNavbar";

export const Product = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useScrollbarStyles();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="overflow-hidden">
      {isLoggedIn ? <LoginNavbar /> : <Navbar />}
      <ProductLanding />
    </div>
  );
};

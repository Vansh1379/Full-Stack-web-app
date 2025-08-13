import { Signin } from "../components/Signin";
import { useScrollbarStyles } from "../hooks/useScrollbarStyles";

export const Signup = () => {
  useScrollbarStyles();
  return (
    <div className="bg-gray-200 overflow-hidden">
      <Signin />
    </div>
  );
};

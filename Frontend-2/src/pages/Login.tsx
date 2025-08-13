import { LoginPage } from "../components/LoginPage";
import { useScrollbarStyles } from "../hooks/useScrollbarStyles";

export const Login = () => {
  useScrollbarStyles();
  return (
    <div className="bg-gray-200 overflow-hidden">
      <LoginPage />
    </div>
  );
};

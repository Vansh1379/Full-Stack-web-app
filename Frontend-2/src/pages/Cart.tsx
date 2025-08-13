import { CartCompo } from "../components/Cart";
import { CartDisplay } from "../components/cart/CartDisplay";
import { useScrollbarStyles } from "../hooks/useScrollbarStyles";

export const Cart = () => {
  useScrollbarStyles();

  return (
    <div className="overflow-hidden">
      <CartCompo />
      <CartDisplay />
    </div>
  );
};

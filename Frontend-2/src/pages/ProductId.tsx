import { ProductID } from "../components/ProductID";
import { useParams } from "react-router-dom";
import { useScrollbarStyles } from "../hooks/useScrollbarStyles";

export const ProductId = () => {
  const { id } = useParams();
  useScrollbarStyles();

  return (
    <div className="bg-gray-300 overflow-hidden">
      <ProductID id={parseInt(id || "")} />
    </div>
  );
};

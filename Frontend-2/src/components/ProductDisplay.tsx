import { useEffect, useState } from "react";
import axios from "axios";
import ProductSkeleton from "./Skeletons/Skeleton";
import { useNavigate } from "react-router-dom";
import { ProductsNotFound } from "./Modals/ProductNotFound";

interface Product {
  id: number;
  name: string;
  description: string;
  catageory: string;
  price: number;
  orignalPrice: number;
  quantity: string;
  discount: number;
  img: string;
}

const trimName = (name: string, maxlength: number) => {
  if (name.length <= maxlength) return name;
  return `${name.substring(0, maxlength)}...`;
};

export const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const LinkTo = (id: number): any => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios({
          method: "get",
          url: "https://shoppr.onrender.com/api/v1/pro/product",
        });

        if (response.data.getProduct) {
          setProducts(response.data.getProduct);
          setLoading(false);
        }
      } catch (error) {
        console.error(`This is the error: ${error}`);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (products.length === 0 || !products) {
    return <ProductsNotFound />;
  }

  return (
    <div className="flex flex-wrap">
      {products.map((item) => (
        <div
          key={item.id}
          className="w-1/4 p-4"
          onClick={() => LinkTo(item.id)}
        >
          <div className="cursor-pointer">
            <img
              src={item.img}
              alt={item.name}
              className="h-60 w-60 object-fill"
            />
          </div>
          <div className="mt-2">
            <div
              className="w-full cursor-pointer font-medium"
              title={item.name}
            >
              {trimName(item.name, 55)}
            </div>
            <div className="text-base font-normal text-gray-500 cursor-pointer mt-1">
              {item.quantity}
            </div>
            <div className="flex items-center mt-4 cursor-pointer">
              <div className="text-base font-medium pr-2">₹{item.price}</div>
              <div className="text-sm font-normal text-gray-400 line-through pr-2">
                ₹{item.orignalPrice}
              </div>
              <div className="text-green-600">{item.discount}% off</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

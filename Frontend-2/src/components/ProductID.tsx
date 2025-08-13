import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import ProductSkeleton from "./Skeletons/ProductIDSkeleton";
import { ProductNotFound } from "./Modals/ProductNotFound";
import { LoginNavbar } from "./LoginNavbar";
import { jwtDecode, JwtPayload } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { Toaster, toast } from "sonner";

interface Rating {
  rating: number;
}

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

interface ProductIdProp {
  id: number;
}

interface CustomJwtPayload extends JwtPayload {
  data?: string;
}

const StarRating = ({ rating }: Rating) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const ProductID = ({ id }: ProductIdProp) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // for skeleton
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // for login navbar

  const notify = () => toast("Product has been added to cart succesfully !");

  // to get token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // functio  to add to cart item in cartItem table
  const HandleAddToCart = async () => {
    const token = localStorage.getItem("token");

    // if user is logged in then only they can add to cart
    if (!token) {
      toast.error("Please! login First", {
        style: {
          background: "#ef4444",
          color: "white",
        },
        duration: 3000,
      });
      return;
    }

    try {
      const decodeToken = jwtDecode<CustomJwtPayload>(token);
      const userId = decodeToken.data;

      const responseForCartId = await axios.get(
        `https://shoppr.onrender.com/api/v1/cart/cartid/${userId}`
      );
      const cartId = responseForCartId.data.cartId.id;

      const response = await axios.post(
        "https://shoppr.onrender.com/api/v1/cart/",
        {
          cartId: cartId,
          productId: id,
        }
      );

      console.log(response);
      toast.success("Added to cart sucessfully!", {
        style: {
          background: "#22c55e",
          color: "white",
        },
        description: "Nice! keep shooping",
        duration: 2000,
      });
      notify();
    } catch (error) {
      console.error(`This is the error in AddToCart function ${error}`);
      toast.error("Backend is Down", {
        style: {
          background: "#ef4444",
          color: "white",
        },
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://shoppr.onrender.com/api/v1/pro/product/${id}`
        );

        // console.log('Full response:', response.data);

        if (response.data.getProductById) {
          // console.log('Product data:', JSON.stringify(response.data.getProductById, null, 2));
          setProduct(response.data.getProductById);
        } else {
          console.log("No product data found in response");
        }
      } catch (error) {
        console.error("Error fetching product:", error);

        toast.error("Error While fetching products", {
          style: {
            background: "#ef4444",
            color: "white",
          },
          duration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      // console.log('Fetching product with ID:', id);
      getProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <ProductSkeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <ProductNotFound />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Toaster position="top-center" richColors />
      <div className="bg-white">
        {isLoggedIn ? <LoginNavbar /> : <Navbar />}
      </div>

      <div className="bg-white mx-20 min-h-screen">
        <div className="flex-grow flex justify-center p-4">
          <div className="flex w-full max-w-6xl">
            <div className="w-2/5 pr-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-contain max-h-80 cursor-move"
              />
            </div>
            <div className="w-3/5">
              <h1 className="text-xl font-bold mb-1">{product.name}</h1>
              <p className="text-sm mb-2">({product.quantity})</p>
              <div className="flex items-center mb-2">
                <StarRating rating={4.5} />
                <span className="ml-2 text-sm">
                  4.5/5 56399 ratings & 3888 reviews
                </span>
              </div>
              <div className="mb-2">
                <span className="text-xl font-bold">₹{product.price}</span>
                <span className="text-sm line-through ml-2">
                  MRP: ₹{product.orignalPrice}
                </span>
                <span className="text-green-600 text-sm ml-2">
                  {product.discount}% Off
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                inclusive of all taxes
              </p>
              <div className="bg-gray-100 p-2 mb-2 text-sm">
                <p>Pick a Free Gift on Orders above 1600</p>
              </div>
              <div className="mb-3">
                <p className="mb-1 text-sm font-semibold">
                  ({product.quantity})
                </p>
                <div className="flex space-x-2 mt-4 mb-5">
                  {["1 pcs", "2 pcs", "3 pcs", "4 pcs"].map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-1 text-sm border rounded-full ${
                        size === product.quantity
                          ? "bg-gray-800 text-white"
                          : "bg-pink-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="w-1/2 bg-pink-500 text-white py-2 rounded-full text-sm hover:text-black hover:border-2 border-black"
                onClick={HandleAddToCart}
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

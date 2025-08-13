import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartSkeleton from "../Skeletons/CartSkeleton";
import EmptyCartModal from "../Modals/EmptyCartModal";

interface CartItem {
  productId: number;
}

declare global {
  interface Window {
    Razorpay: any; // or a more specific type if available
  }
}

interface Product {
  id: number;
  name: string;
  description: string;
  catageory: string;
  price: number;
  orignalPrice?: number;
  quantity?: string;
  discount?: number;
  img?: string;
}

export const CartDisplay = () => {
  const { id } = useParams<{ id: string }>();
  const [cartId, setCartId] = useState<number | null>(null);
  const [cartItem, setCartItems] = useState<CartItem[]>([]);
  const [product, setProduct] = useState<Product[]>([]);
  const [isCartItemsLoaded, setIsCartItemsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCartId = async () => {
      try {
        const response = await axios.get(
          `https://shoppr.onrender.com/api/v1/cart/cartid/${id}`
        );
        if (response) {
          setCartId(response.data.cartId.id);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching cart ID", error);
      }
    };

    if (id) {
      getCartId();
    }
  }, [id]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get(
          `https://shoppr.onrender.com/api/v1/cart/cartItem/${cartId}`
        );
        if (response) {
          setCartItems(response.data.cartItems);
          setIsCartItemsLoaded(true);
        }
      } catch (error) {
        console.error(`error fetching the product id's ${error}`);
      }
    };

    if (cartId) {
      setIsCartItemsLoaded(false);
      getProductsData();
    }
  }, [cartId]);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productPromise = cartItem.map((items) =>
          axios.get(
            `https://shoppr.onrender.com/api/v1/pro/product/${items.productId}`
          )
        );

        const productResponse = await Promise.all(productPromise);
        const productDetail = productResponse.map(
          (response) => response.data.getProductById
        );
        setProduct(productDetail);
        setIsLoading(false);
      } catch (error) {
        console.error(`error in fetching product detail ${error}`);
        setIsLoading(false);
      }
    };

    if (isCartItemsLoaded && cartItem.length > 0) {
      getProductDetails();
    } else if (isCartItemsLoaded && cartItem.length === 0) {
      setIsLoading(false);
    }
  }, [cartItem, isCartItemsLoaded]);

  const handleRemoveCartItem = async () => {
    // Implement remove functionality
  };

  const calculateTotal = (): number => {
    return product.reduce((total, item) => total + item.price, 0);
  };
  const total = calculateTotal();

  const calculateDiscount = (): number => {
    return product.reduce((total, item) => {
      const discount = item.orignalPrice ? item.orignalPrice - item.price : 0;
      return total + discount;
    }, 0);
  };

  if (isLoading) {
    return <CartSkeleton />;
  }

  if (!isLoading && (!product.length || !cartItem.length)) {
    return <EmptyCartModal />;
  }

  const HandlePayments = async (e: React.FormEvent) => {
    try {
      const response = await axios.post(
        "https://shoppr.onrender.com/api/v1/order/razorpay",
        { amount: total, currency: "INR" },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response.data);

      const options = {
        key: "rzp_test_PxcBWpm7asqR5l",
        amount: total,
        currency: "INR",
        name: "Shoppr",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.data.order.id,
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      let rzp1 = new window.Razorpay(options);
      rzp1.open();
      e.preventDefault();
    } catch (err) {
      console.error(err); // Handle errors
    }
  };

  return (
    <div className="flex  px-4 max-w-7xl mx-auto">
      <div className="flex-grow">
        {product.map((product) => (
          <span key={product.id} className="bg-gray-800">
            <div className="flex border rounded-lg border-gray-300 py-4 mx-5 w-[900px] mt-3 cursor-pointer">
              <div className="pl-10">
                <img
                  src={product.img}
                  alt="hello"
                  className="h-[130px] w-[180px]"
                />
              </div>
              <div className="pl-5">
                <div className="text-base font-medium text-gray-600">
                  {product.name}
                </div>
                <div className="text-sm mt-2 text-gray-400 font-medium font-sans">
                  {product.quantity}
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-base font-medium pr-2">
                    ₹{product.price}
                  </div>
                  <div className="text-sm font-normal text-gray-400 line-through pr-2">
                    ₹{product.orignalPrice}
                  </div>
                  <div className="text-green-600">{product.discount}% off</div>
                </div>
                <div className="text-gray-600 mt-1 font-medium">
                  Catageory :- {product.catageory}
                </div>
                <div className="flex">
                  <div className="pl-72">
                    <button className="bg-pink-500 px-20 py-1 rounded-2xl text-white hover:bg-pink-600 transition-colors">
                      Order now
                    </button>
                  </div>
                  <div
                    className="text-red-400 text-lg font-sans hover:text-red-600 font-medium pl-7 pr-3"
                    onClick={handleRemoveCartItem}
                  >
                    REMOVE
                  </div>
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
      <div className="w-72 h-fit mt-3 ml-1 sticky top-4">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Items ({product.length})</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="text-green-600">- ₹{calculateDiscount()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-semibold text-lg">
                <span>Grand Total</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <div className="text-green-600 text-sm">
                You saved ₹{calculateDiscount()}
              </div>
            </div>
            <button
              className="w-full bg-pink-500 text-white py-3 rounded-lg mt-4 hover:bg-pink-600 transition-colors"
              onClick={HandlePayments}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;

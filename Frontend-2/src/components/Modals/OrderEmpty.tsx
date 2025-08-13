import { useNavigate } from "react-router-dom";

const NoOrdersModal = () => {
  const navigate = useNavigate();
  const handleShopRedirect = () => {
    navigate("/product");
  };
  const handleCancel = () => {
    navigate("/home");
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] p-6 rounded-lg text-center">
        <div className="text-8xl mb-4 text-pink-500">📦</div>
        <h2 className="text-xl font-bold text-pink-700 mb-3">No Orders Yet</h2>
        <p className="text-gray-600 mb-5 text-sm">
          You haven't placed any orders yet. Start exploring our products and
          add some items to your cart!
        </p>
        <div className="flex space-x-3">
          <button
            onClick={handleCancel}
            className="flex-1 py-2 border border-pink-500 text-pink-500 
                       rounded-lg hover:bg-pink-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleShopRedirect}
            className="flex-1 py-2 bg-pink-500 text-white 
                       rounded-lg hover:bg-pink-600 transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoOrdersModal;

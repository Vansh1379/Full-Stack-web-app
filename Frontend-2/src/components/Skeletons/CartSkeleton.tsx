const CartSkeleton = () => {
  // Create an array of 3 items to show multiple skeleton items while loading
  const skeletonItems = [1, 2, 3];

  return (
    <div>
      {skeletonItems.map((item) => (
        <div key={item} className="animate-pulse">
          <div className="flex border rounded-lg border-gray-300 py-4 mx-5 w-[850px] mt-3">
            {/* Image skeleton */}
            <div className="pl-10">
              <div className="h-[130px] w-[180px] bg-gray-200 rounded-md"></div>
            </div>

            {/* Content skeleton */}
            <div className="pl-5 flex-1">
              {/* Product name skeleton */}
              <div className="h-5 bg-gray-200 rounded w-[300px]"></div>

              {/* Quantity skeleton */}
              <div className="h-4 bg-gray-200 rounded w-[100px] mt-2"></div>

              {/* Price section skeleton */}
              <div className="flex items-center mt-2 space-x-2">
                <div className="h-5 bg-gray-200 rounded w-[60px]"></div>
                <div className="h-4 bg-gray-200 rounded w-[60px]"></div>
                <div className="h-4 bg-gray-200 rounded w-[80px]"></div>
              </div>

              {/* Category skeleton */}
              <div className="h-5 bg-gray-200 rounded w-[200px] mt-1"></div>

              {/* Buttons skeleton */}
              <div className="flex mt-4">
                <div className="pl-72">
                  <div className="h-8 bg-gray-200 rounded-2xl w-[160px]"></div>
                </div>
                <div className="pl-7">
                  <div className="h-6 bg-gray-200 rounded w-[80px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSkeleton;

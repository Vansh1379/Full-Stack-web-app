const ProductSkeleton = () => {
  return (
    <div className="flex">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="w-1/4 p-4">
          {/* Image skeleton */}
          <div className="cursor-pointer">
            <div className="h-60 w-60 animate-pulse bg-gray-200 rounded" />
          </div>

          {/* Content skeleton */}
          <div className="mt-2">
            {/* Product name skeleton */}
            <div className="w-full h-6 animate-pulse bg-gray-200 rounded" />

            {/* Quantity skeleton */}
            <div className="mt-1 w-3/4 h-5 animate-pulse bg-gray-200 rounded" />

            {/* Price section skeleton */}
            <div className="flex items-center mt-4 gap-2">
              {/* Price */}
              <div className="h-5 w-16 animate-pulse bg-gray-200 rounded" />
              {/* Original price */}
              <div className="h-4 w-16 animate-pulse bg-gray-200 rounded" />
              {/* Discount */}
              <div className="h-4 w-16 animate-pulse bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;

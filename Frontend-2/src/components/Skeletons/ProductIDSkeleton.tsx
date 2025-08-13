// ProductSkeleton.tsx
const ProductSkeleton = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white">
        {/* Navbar placeholder */}
        <div className="h-16 bg-gray-100 animate-pulse" />
      </div>

      <div className="bg-white mx-20 min-h-screen">
        <div className="flex-grow flex justify-center p-4">
          <div className="flex w-full max-w-6xl">
            {/* Image skeleton */}
            <div className="w-2/5 pr-4">
              <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg" />
            </div>

            {/* Content skeleton */}
            <div className="w-3/5">
              {/* Title skeleton */}
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-1 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 animate-pulse" />

              {/* Rating skeleton */}
              <div className="flex items-center mb-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"
                    />
                  ))}
                </div>
                <div className="w-48 h-4 bg-gray-200 rounded ml-2 animate-pulse" />
              </div>

              {/* Price skeleton */}
              <div className="mb-2 flex items-center">
                <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-24 ml-2 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-16 ml-2 animate-pulse" />
              </div>

              {/* Tax info skeleton */}
              <div className="h-3 bg-gray-200 rounded w-32 mb-2 animate-pulse" />

              {/* Gift info box skeleton */}
              <div className="bg-gray-100 p-2 mb-2">
                <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
              </div>

              {/* Size selector skeleton */}
              <div className="mb-3">
                <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse" />
                <div className="flex space-x-2 mt-4 mb-5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-8 bg-gray-200 rounded-full animate-pulse"
                    />
                  ))}
                </div>
              </div>

              {/* Button skeleton */}
              <div className="w-1/2 h-10 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;

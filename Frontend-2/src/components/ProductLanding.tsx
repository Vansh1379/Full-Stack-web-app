import { FilterDiv } from "./FilterDiv";
import { ProductPage } from "./ProductPage";

export const ProductLanding = () => {
  return (
    <div>
      <div className="ml-14 mt-10">
        <div className="text-xl font-semibold">All Products :</div>
        <div className="mt-5 flex items-center">
          <div className="text-xs font-semibold text-gray-500">Home</div>
          <div className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-3 text-sm mt-1 text-gray"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="text-xs font-semibold ml-1 text-gray-500">Women</div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <FilterDiv />
          </div>
          <div className="flex-grow ml-10 mt-5">
            <ProductPage />
          </div>
        </div>
      </div>
    </div>
  );
};

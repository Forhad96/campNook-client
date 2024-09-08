import { FC, useCallback } from "react";
import { IProduct } from "../products/types";
import { LoveIcon, ShoppingBagPlusIcon } from "../shared/Icons/Icons";
import { Button } from "../ui/button";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";

import { toast } from "sonner";

const ProductInfo = ({ name, category, price, _id }: IProduct) => (
  <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{name}</h1>
    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">{category}</h1>

    <div className="mt-5 flex items-center">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="block h-4 w-4 align-middle text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
    </div>

    <PriceAndAddToCart price={price} id={_id} />
    
    <ProductFeatures />
  </div>
);
export default ProductInfo;





const PriceAndAddToCart: FC<{ price: number; id: string }> = ({
  price,
  id,
}) => {
  const [addToCart, { isError, isLoading, isSuccess }] =
    useAddToCartMutation();

  const handleAddToCart = useCallback(() => {
    addToCart({ product: id, quantity: 1 });
  }, [addToCart, id]);

  if (isSuccess) {
    toast.success("1 new item(s) have been added to your cart");
  }
  if (isError) {
    toast.error("Failed to add item to cart");
  }

  return (
    <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
      <div className="flex items-end">
        <h1 className="text-3xl font-bold">${price}</h1>
        {/* <span className="text-base">/month</span> */}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          type="button"
          onClick={handleAddToCart}
          className="bg-red-600  text-white hover:text-brandPrimary hover:bg-highlight/60"
          disabled={isLoading}
        >
          <LoveIcon/> Add wishlist
        </Button>
      <Button
        type="button"
        onClick={handleAddToCart}
        className="bg-highlight text-primary hover:text-brandPrimary hover:bg-highlight/60"
        disabled={isLoading}
      >
        <ShoppingBagPlusIcon /> Add to cart
      </Button>
      </div>
    </div>
  );
};

const ProductFeatures = () => (
  <ul className="mt-8 space-y-2">
    {[
      {
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        text: "Free shipping worldwide",
      },
      {
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        text: "Cancel Anytime",
      },
    ].map((feature, index) => (
      <li
        key={index}
        className="flex items-center text-left text-sm font-medium text-gray-600"
      >
        <svg
          className="mr-2 block h-5 w-5 align-middle text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={feature.icon}
          />
        </svg>
        {feature.text}
      </li>
    ))}
  </ul>
);

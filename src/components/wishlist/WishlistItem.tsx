import { FC, memo } from "react";

import { Button } from "../ui/button";

import { ShoppingBagIcon } from "../shared/Icons/Icons";
import { IProduct } from "../products/types";
import Container from "../shared/Container";

const WishlistItem: FC<{ product: IProduct }> = memo(({ product }) => {
  const { images, name, description, price } = product;

  return (
    <Container>
      <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img
            src={images[0]}
            alt={name}
            className="h-full object-center object-cover md:block hidden"
          />
          <img
            src={images[0]}
            alt={name}
            className="md:hidden w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
            2024camp
          </p>
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
              {name}
            </p>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </div>
          <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
            Height: 4inc
          </p>
          <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
            Color: black
          </p>
          <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
            Composition: {description}
          </p>
          <div className="flex items-center justify-between pt-5">
            <div className="flex items-center">
              <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                Add to favorites
              </p>
              <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                Remove
              </p>
            </div>
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default WishlistItem;

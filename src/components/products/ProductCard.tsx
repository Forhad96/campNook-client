import React from "react";
import { IProduct } from "./types";
import demoProduct from "/demoProduct.png";
import { LoveIcon, ShopingCartIcon } from "../shared/Icons/Icons";
interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
}

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={demoProduct}
          alt={product.name}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {product.category}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${product.price}
            </p>
            {/* <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${product.originalPrice}
              </p>
            </del> */}
            <div className="ml-auto flex justify-between items-center gap-2">
              <LoveIcon />
              <ShopingCartIcon />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;

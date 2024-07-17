import React from "react";
import { IProduct } from "./types";
import { LoveIcon, ShoppingBagIcon, } from "../shared/Icons/Icons";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/products/${product?._id}`)}
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >

        <img
          src={product.images[0]}
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
              <ShoppingBagIcon />
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductCard;


import Checkout from "@/components/cart/Checkout";
import  { FC, useState } from "react";



const Cart:FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleCheckout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center py-8">
      <button
        onClick={toggleCheckout}
        className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        Open Modal
      </button>
      <Checkout isOpen={isOpen} onClose={toggleCheckout} />
    </div>
  );
};

export default Cart;

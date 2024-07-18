import { FC, memo, useState, useCallback } from "react";
import { DecrementIcon, IncrementIcon } from "../shared/Icons/Icons";
import { useUpdateCartMutation } from "@/redux/features/cart/cartApi";
import Loader from "../shared/Loader/Loader";

const ChooseQuantity: FC<{
  quantity: number;
  stock: number;
  productId: string;
}> = memo(({ quantity, stock, productId }) => {
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const [updateItemQuantity, { isSuccess, isError, isLoading }] =
    useUpdateCartMutation();
  // console.log(productId,data);

  const handleIncrement = useCallback(() => {
    if (updateQuantity < stock) {
      const newQuantity = updateQuantity + 1;
      setUpdateQuantity(newQuantity);
      updateItemQuantity({ product: productId, quantity: newQuantity });
    }
  }, [updateQuantity, stock, productId, updateItemQuantity]);

  const handleDecrement = useCallback(() => {
    if (updateQuantity > 1) {
      const newQuantity = updateQuantity - 1;
      setUpdateQuantity(newQuantity);
      updateItemQuantity({ product: productId, quantity: newQuantity });
    }
  }, [updateQuantity, productId, updateItemQuantity]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <label htmlFor="counter-input" className="sr-only">
        Choose quantity:
      </label>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button
            type="button"
            id="decrement-button"
            onClick={handleDecrement}
            data-input-counter-decrement="counter-input"
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <DecrementIcon />
          </button>
          <input
            type="text"
            id="counter-input"
            data-input-counter=""
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
            value={updateQuantity}
            readOnly
          />
          <button
            type="button"
            id="increment-button"
            onClick={handleIncrement}
            data-input-counter-increment="counter-input"
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <IncrementIcon />
          </button>
        </div>
      </div>
      {isLoading && <p>Updating quantity...</p>}
      {isError && <p>Error updating quantity. Please try again.</p>}
      {isSuccess && <p>Quantity updated successfully!</p>}
    </>
  );
});

export default ChooseQuantity;

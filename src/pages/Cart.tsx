import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { ICartItem } from "@/components/cart/types";
import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader/Loader";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetUserAllCartsQuery } from "@/redux/features/cart/cartApi";
import {  useAppSelector } from "@/redux/hooks";
import { FC } from "react";

const Cart: FC = () => {

  const user = useAppSelector(selectCurrentUser);


  const { data, isLoading, } = useGetUserAllCartsQuery(undefined);
  const items = data?.data?.items as ICartItem[];
  const total = data?.data?.totalPrice as number;
  // console.log(total);
  if (isLoading){
    return<Loader />;

  } 
console.log(items);
  return (
    <Container className=" items-center justify-center py-8">
      <div className="flex items-end lg:flex-row flex-col justify-end">
        <div className=" md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-scroll overflow-x-hidden lg:h-screen h-auto">
          <div
            className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
            // onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
              Back
            </p>
          </div>
          <p className="lg:text-4xl text-3xl font-black leading-10 text-brandPrimary dark:text-white pt-3">
            Products
          </p>

          {items?.map((item, index) => (
            // console.log(item.product)
            <CartItem key={index} {...item} email={user?.email} />
          ))}
        </div>

        <CartSummary total={total} />
      </div>
    </Container>
  );
};

export default Cart;

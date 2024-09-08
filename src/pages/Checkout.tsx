import { ICartItem } from "@/components/cart/types";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetUserAllCartsQuery } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface UserDetails {
  customerName: string;
  email: string;
  phone: string;
  customerAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

interface Item {
  productId: string;
  quantity: number;
  price: number;
}

const CheckoutPage: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data, isLoading } = useGetUserAllCartsQuery(undefined);
  const items = data?.data?.items as ICartItem[];
  const totalAmount = data?.data?.totalPrice as number;

  const [userDetails, setUserDetails] = useState<UserDetails>({
    customerName: "",
    email: "",
    phone: "",
    customerAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });


  const [paymentMethod, setPaymentMethod] = useState<"cod" | "stripe">("cod");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      customerAddress: { ...prevDetails.customerAddress, [name]: value },
    }));
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value as "cod" | "stripe");
  };

  const handleSubmit = (e: FormEvent) => {
    const order = {
user:user?.email,
items,
totalAmount,
    }
    e.preventDefault();
    if (paymentMethod === "cod") {
      console.log("Cash on Delivery selected");
      console.log("Order details:", order);
    } else if (paymentMethod === "stripe") {
      console.log("Stripe Payment selected");
      console.log("Order details:", { userDetails, items, });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* User Details */}
          <div className="mb-4">
            <label className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={userDetails.customerName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address Fields */}
          <div className="mb-4">
            <label className="block text-gray-700">Street</label>
            <input
              type="text"
              name="street"
              value={userDetails.customerAddress.street}
              onChange={handleAddressChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={userDetails.customerAddress.city}
              onChange={handleAddressChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={userDetails.customerAddress.state}
              onChange={handleAddressChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={userDetails.customerAddress.zipCode}
              onChange={handleAddressChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={userDetails.customerAddress.country}
              onChange={handleAddressChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Payment Methods */}
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Stripe
              </label>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

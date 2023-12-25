import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.bazar.productData);
  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total = total + item.price * item.quantity));
    return total;
  };
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <CartItem />
      <div className="w-1/3 bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium">Cart Totals</h2>
          <p className="flex items-center gap-4 text-base">
            Subtota <span className="font-bold text-lg">${getTotal()}</span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              minima?
            </span>
          </p>
        </div>
        <p className="flex justify-between font-semibold mt-6">
          Total <span className="text-xl font-bold">${getTotal()}</span>
        </p>
        <button className="text-base bg-cyan-500 text-white w-full py-3 mt-6 hover:bg-cyan-800 duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

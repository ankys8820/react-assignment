import React from "react";
import { useSelector } from "react-redux";

const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData);
  return (
    <div className="w-2/3 pr-10">
      <h1 className="">Cart Item</h1>
    </div>
  );
};

export default CartItem;

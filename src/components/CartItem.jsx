import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/features/bazarSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </div>
      <div className="">
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div
              className="flex items-center gap-2"
              onClick={() => {
                dispatch(
                  deleteItem({
                    id: item.id,
                  })
                );
              }}
            >
              <MdOutlineClose className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
              <img
                src={item.image}
                className="w-32 h-32 object-cover"
                alt="ProductImage"
              />
            </div>

            <h2 className="w-52">{item.title}</h2>
            <p className="text-sm">Quantity</p>
            <p className="w-10">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;

import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [query, setQuery] = useState("");
  console.log(productData);
  console.log(query);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="">
          <h1 className=" text-3xl font-bold text-cyan-500">
            <Link to="/">eBAZAR</Link>
          </h1>
        </div>

        <div className="flex gap-4">
          <input
            className="p-2 border-none"
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="px-8 text-gray-200 bg-red-500 hover:bg-red-800 rounded">
            Search
          </button>
        </div>

        <div>
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
            <Link to="/cart">
              <li className="relative">
                {/* <BsFillCartFill className="text-2xl" /> */}
                <BsBag className="text-2xl" />
                <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                  {productData.length}
                </span>
              </li>
            </Link>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GiotOpyx-bcovaCjEhxV8akRl2t8rV4L_C2zHeWX&s"
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  // console.log(products);
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Shop Everyday
          </h1>
          <span className="w-20 h-[3px] bg-black"></span>
          <p className="max-w-[700px] text-gray-600 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe fuga
            dicta omnis est molestias cupiditate dolores ab assumenda iure
            nesciunt.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
          {products.map((item, index) => (
            <div key={index}>
              <ProductsCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

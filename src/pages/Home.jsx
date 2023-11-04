import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProduct] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProduct(data.data);
  }, [data]);
  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  );
};

export default Home;

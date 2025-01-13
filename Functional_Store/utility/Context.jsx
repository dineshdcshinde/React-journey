import axios from "./Axioxs";
import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  

  const getProducts = async () => {
    try {
      // We have  destructure the data from that response other wise , we wanted to write this response.data
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;

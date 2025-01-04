import React from "react";

// import api from "../utlitity/AxiosConfig";

const Services = () => {

  const getproducts = async ()=>{
    try {
      const data = await api.get("/products")
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c3c3c] text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Our Servi ces</h1>
      <p className="text-lg mb-4">
        We offer a wide range of services to meet your needs, including web
        development, mobile app development, and more.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">Web Development</li>
        <li className="mb-2">Mobile App Development</li>
        <li className="mb-2">UI/UX Design</li>
        <li className="mb-2">SEO Optimization</li>
      </ul>

    <ul>
      {/* {
        getproducts().map((product, index) => {
          return (
            <li key={index} className="mb-2">
              {product.name}
            </li>
          );
        })
      } */}
    </ul>


     
    </div>



  );
};

export default Services;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../utility/Axios";

const SingleProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  // const [product, setProduct] = useContext(ProductContext);
  //  We are creating a new useState to store this data and it is only used for this component.

  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const { data } = await instance.get(`/products/${id}`);
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!singleProduct) return <h1>Loading....</h1>;
  return (
    <>
      <div className="single_Card_Container min-h-screen bg-[#3c3c3c] w-full flex justify-center items-center">
        <div className="singleProduct flex ">
          <div
            className="singleProcut_Img h-[350px] w-[400px]  bg-contain  bg-no-repeat bg-center rounded-md hover:bg-[length:102%] cursor-pointer  ]"
            style={{
              backgroundImage: `url(${singleProduct.image})`,
            }}
          ></div>

          <div className="single-product-details w-[550px] px-12 ">
            <p className="text-[1.56rem] font-bold text-white mb-3">
              {singleProduct.title}
            </p>

            <p className="text-[#f5f5f5] font-bold text-[2rem] font-mono mb-3">
              Price: ₹{singleProduct.price}
            </p>

            <p className="text-[1.2rem] text-white mb-2">
              {singleProduct.description}
            </p>
            <p className="text-[#828282] font-bold text-[1.3rem] underline mb-3">
              {" "}
              Category: {singleProduct.category}
            </p>

            <div className="single-product-card-btns-container flex gap-4">
              <button className="px-6 py-3 bg-[#2245d3] rounded-lg text-2xl text-white font-bold hover:bg-[#2f50d6]  transition-all">
                Edit
              </button>
              <button
                className="px-6 py-3 bg-[#6883f0] rounded-lg text-2xl text-white font-bold hover:bg-[#5b73d3] transition-all"
                onClick={() => navigate("/")}
              >
                Go Back
              </button>
              <button className="px-6 py-3 bg-[#e43b2f] rounded-lg text-2xl text-white font-bold hover:bg-[#cb362b] transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

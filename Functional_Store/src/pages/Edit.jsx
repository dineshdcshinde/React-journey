import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../utility/Context";
import {nanoid} from "nanoid";

const Edit = () => {
const [products, setProducts] = useContext(ProductContext);

const {id} = nanoid();

  const navigate = useNavigate()
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id,
      title,
      image,
      price,
      category,
      description,
    };

    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    navigate("/")
    console.log(products);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#535353] p-4 m-auto">
      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded-lg shadow-2xl w-[50%] text-white  "
      >
        <h2 className="text-2xl font-bold mb-6">Create Product</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            className=" w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Product Title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Product Description"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            className=" w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            placeholder="Image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="price">
            Price
          </label>
          <input
            className=" w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="category">
            Category
          </label>
          <input
            className=" w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="category"
            name="category"
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Category"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600  p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Edit;

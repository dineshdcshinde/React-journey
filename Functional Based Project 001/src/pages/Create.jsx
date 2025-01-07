import React, { useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
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
            value={formData.title}
            onChange={handleChange}
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
            value={formData.description}
            onChange={handleChange}
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
            value={formData.imageUrl}
            onChange={handleChange}
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
            value={formData.price}
            onChange={handleChange}
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
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600  p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Create;

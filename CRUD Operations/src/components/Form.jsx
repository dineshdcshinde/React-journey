import React, { useState } from "react";
import { postData } from "../utility/PostAPI";

const Form = ({ posts, setPosts }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    // setAddData();
  };

  //   AddPostData

  const addPostData = async () => {
    try {
      let res = await postData(addData);
      if (res.status === 201) {
        setPosts([...posts, res.posts]);
      }

      setAddData({ title: "", body: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPostData();
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-3 text-center w-full">
        Add New Post
      </h2>
      <div className="formContainer w-full flex justify-center items-center mb-4">
        <form
       
          onSubmit={handleSubmit}
          className="bg-gray-700 text-white shadow-md rounded-lg w-full max-w-lg p-6"
        >
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>

            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              name="title"
              value={addData.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="body"
            >
              body
            </label>
            <input
              type="text"
              id="body"
              placeholder="Enter body"
              name="body"
              value={addData.body}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

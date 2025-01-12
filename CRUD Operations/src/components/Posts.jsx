import React, { useState, useEffect } from "react";
import { deletePost, getPost } from "../utility/PostAPI";
import Form from "./Form";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [updatePostData, setUpdatePostData] = useState({});

  const getPostsData = async () => {
    try {
      let { data } = await getPost();
      return setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  // Delete functionality
  const handleDelete = async (id) => {
    try {
      let response = await deletePost(id);

      if (response.status === 200) {
        let updatedPosts = posts.filter((currPost) => currPost.id !== id);
        setPosts(updatedPosts);
      } else {
        alert("Failed to delete post. Please try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update functionality

  const handleUpdate = (currElement) => setUpdatePostData(currElement);

  return (
    <>
      <div className="postContainer flex flex-wrap justify-between items-center p-4">
        <Form
          posts={posts}
          setPosts={setPosts}
          updatePostData={updatePostData}
          setUpdatePostData={setUpdatePostData}
        />

        <ol className="w-full flex flex-wrap justify-between">
          {posts &&
            posts.map((currElement) => (
              <li
                key={currElement.id}
                className="bg-[#474747] text-white m-2 p-4 rounded-md shadow-md w-full sm:w-[45%] lg:w-[30%] flex flex-col justify-between"
              >
                <div>
                  <h1 className="text-xl font-bold mb-2">{currElement.id}</h1>
                  <h2 className="text-lg font-semibold mb-2">
                    {currElement.title}
                  </h2>
                  <p className="text-sm mb-4">{currElement.body}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleUpdate(currElement)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(currElement.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </>
  );
};

export default Posts;

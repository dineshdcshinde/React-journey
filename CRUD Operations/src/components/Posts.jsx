import React, { useEffect, useState } from "react";
import { getPost } from "../utility/PostAPI";

const Posts = ({ posts }) => {
  const [posts, setPosts] = useState(null);

  const getPostDetails = async () => {
    try {
      let response = await getPost();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getPostDetails();
  },[])

  return (
    <h1>Hi there !</h1>
    // <div className="postContainer flex flex-wrap justify-center items-center p-4">
    //   <ol className="w-full">
    //     {posts &&
    //       posts.map((currElement) => (
    //         <li
    //           key={currElement.id}
    //           className="bg-[#474747] text-white m-2 p-4 rounded-md shadow-md w-full sm:w-[45%] lg:w-[30%] flex flex-col justify-between"
    //         >
    //           <div>
    //             <h1 className="text-xl font-bold mb-2">{currElement.id}</h1>
    //             <h2 className="text-lg font-semibold mb-2">
    //               {currElement.title}
    //             </h2>
    //             <p className="text-sm mb-4">{currElement.body}</p>
    //           </div>
    //           <div className="flex justify-between mt-4">
    //             <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
    //               Edit
    //             </button>
    //             <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
    //               Delete
    //             </button>
    //           </div>
    //         </li>
    //       ))}
    //   </ol>
    // </div>
  );
};

export default Posts;

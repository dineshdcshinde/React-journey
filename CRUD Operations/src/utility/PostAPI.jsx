import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return instance.get("/posts");
};

// Delete method
export const deletePost = (id) => {
  return instance.delete(`/posts/${id}`);
};

// Post Method / Creating new method
export const postData = (post) => {
  return instance.post("/posts", post);
};

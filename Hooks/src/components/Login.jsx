import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to server for authentication
    console.log(user);
  };

  return (
    <>
      <div className=" wrapper bg-gray-900 min-h-screen flex items-center justify-center px-4">
        <div className="wrapper bg-[#2a2a2a] p-8 rounded-lg shadow-2xl w-full max-w-md text-white">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h1>
          <p className="text-sm text-gray-400 mb-8 text-center">
            Please log in to continue. Enter your credentials below.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 rounded bg-gray-800 border-gray-700 focus:ring-blue-500"
                />
                <span className="ml-2 text-gra/y-400">Remember Me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-semibold"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="my-8 text-center text-gray-400">OR</div>

          <div className="flex flex-col space-y-4">
            <button className="w-full py-3 rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white font-semibold flex items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/google.svg"
                alt="Google"
                className="w-5 h-5 mr-3 filter invert"
              />
              Continue with Google
            </button>
            <button className="w-full py-3 rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white font-semibold flex items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg"
                alt="GitHub"
                className="w-5 h-5 mr-3 filter invert"
              />
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  let handleInputChange = (e) => {
    let { value, name } = e.target;

    // always remember setUser gave u the property to access the previous value 
    // and one can access it with the passing parameter and with the help of the name and value
    // we can set our value to the property and with only one useState we can got this . 

    setUser((prev) => ({ ...prev, [name]: value }));


  };


  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    // submit form to server here
    // setUser({ firstName: '', email: '', phoneNumber: '', password: '' });
  }
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
        <div
          className="bg-[#2a2a2a] p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl
         text-white"
        >
          <h2 className="text-center text-white text-[1.5rem] mb-4 font-bold">
            Registration Form
          </h2>

          <p className="text-lg font-semibold mb-6 text-center md:text-left">
            Hi, I am <span className="text-blue-500">{user.firstName}</span>. My email is 
            <span className="text-blue-500">{user.email}</span> and
            number is <span className="text-blue-500">{user.phoneNumber}</span>.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                value={user.firstName}
                onChange={handleInputChange}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                value={user.email}
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                value={user.phoneNumber}
                onChange={handleInputChange}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                value={user.password}
                onChange={handleInputChange}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-semibold"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;

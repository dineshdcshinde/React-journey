import React, { useState } from "react";

const FormHandling = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [user, setUser] = useState(() => {
    const localUser = JSON.parse(localStorage.getItem("client"));
    return localUser || [];
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, phoneNumber };

    const updatedUsers = [...user, newUser];
    setUser(updatedUsers);

    localStorage.setItem("client", JSON.stringify(updatedUsers));

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  };

  return (
    <>
      <p className="bg-[#2a2a2a] text-white pt-4 text-center text-[1.2rem]">
        Hi, I am <span className="text-[#2465c5]">{firstName}</span> &nbsp;
        <span className="text-[#2465c5]">{lastName}</span>. My email is &nbsp;
        <span className="text-[#2465c5]">{email}</span> &nbsp; and my number is{" "}
        <span className="text-[#2465c5]">{phoneNumber}</span>.
      </p>

      <div className="flex items-center justify-center min-h-screen w-full bg-[#2a2a2a]">
        <form
          className="flex flex-col gap-4 w-full mt-[0.5rem] h-[550px] max-w-[450px] bg-white shadow-lg rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-center text-[#333]">
            Registration Form
          </h2>

          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="example@mail.com"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter a secure password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="123-456-7890"
              value={phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Display users */}
      <div className="list-from bg-[#2a2a2a] text-white flex items-center justify-center">
        <ul>
          {user.map((customer, index) => {
            const { firstName, lastName, email, phoneNumber } = customer;
            return (
              <li key={index} className="mb-2">
                <p>FirstName: {firstName}</p>
                <p>LastName: {lastName}</p>
                <p>Email: {email}</p>
                <p>Phone: {phoneNumber}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FormHandling;

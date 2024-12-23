import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c3c3c] text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        If you have any questions or need further information, please feel free
        to contact us.
      </p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            id="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

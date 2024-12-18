import React, { useState } from "react";

const ContactForm = () => {
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setNewClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send the form data to a server
    console.log(newClient);

    setNewClient({ name: "", email: "", message: "", subject: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="wrapper bg-[#2a2a2a] p-8 rounded-lg shadow-2xl w-full max-w-md text-white">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-sm text-gray-400 mb-8 text-center">
            We'd love to hear from you! Please fill out the form below.
          </p>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newClient.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
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
                value={newClient.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newClient.subject}
                onChange={handleInputChange}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newClient.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

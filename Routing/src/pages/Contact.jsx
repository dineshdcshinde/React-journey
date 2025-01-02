import React from "react";
import { Form } from "react-router-dom";

export const ContactData = async ({ request }) => {
  try {
    const response = await request.formData();

    const data = Object.fromEntries(response);
    console.log(data);
    return null;
  } catch (error) {}
};

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c3c3c] text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <Form
        action="/contact"
        method="POST"
        className="w-full max-w-lg bg-[#2a2a2a] p-8 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label
            className="block text-[1.5rem] font-medium mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full p-32rounded-md shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-[1.4rem]"
             name="name"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            className="block text-[1.5rem] font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-[1.4rem]"
            name="email"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            className="block text-[1.5rem] font-medium mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
          name="message"
            className="w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-[1.4rem]"
            id="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[1.3rem]"
        >
          Send Message
        </button>
      </Form>
    </div>
  );
};

import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c3c3c] text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-lg mb-4">
        We offer a wide range of services to meet your needs, including web
        development, mobile app development, and more.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">Web Development</li>
        <li className="mb-2">Mobile App Development</li>
        <li className="mb-2">UI/UX Design</li>
        <li className="mb-2">SEO Optimization</li>
      </ul>
    </div>
  );
};

export default Services;

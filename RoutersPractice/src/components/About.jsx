import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c3c3c] text-white p-4">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our application! We are dedicated to providing the best service possible.
      </p>
      <p className="text-lg mb-4">
        Our team is composed of experienced professionals who are passionate about what they do.
      </p>
      <p className="text-lg mb-4">
        We believe in continuous improvement and always strive to exceed our customers' expectations.
      </p>
    </div>
  );
}

export default About;
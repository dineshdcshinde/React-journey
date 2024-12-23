import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c3c3c] text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-4">
        This is the home page of our application. Here you can find the latest updates and news.
      </p>
      <button className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Learn More
      </button>
    </div>
  )
}

export default Home

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./component/AppLayout";
import ErrrorPage from "./pages/ErrorPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <AppLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/service",
  //         element: <Service />,
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <div className="wrapper bg-[#3c3c3c] min-h-screen w-full text-white text-4xl">
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/*
              We only want to wrap all the child routes with the route of the appLayout and then it will run. 
            */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="movie" element={<Movie />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

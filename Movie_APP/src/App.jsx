import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import { Contact, contactData } from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { GetMovies } from "./api/GetMovies";
import { GetMovieDetail } from "./api/GetMovieDetail";
import { MovieDetails } from "./components/UI/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: GetMovies,
        },
        {
          path: "/movies/:moviesID",
          element: <MovieDetails />,
          loader: GetMovieDetail,
        },

        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import { Contact, ContactData } from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./component/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import { GetMovies } from "./api/GetMovies";
import MovieDetails from "./pages/MovieDetails";
import { GetMovieDetails } from "./api/GetMovieDetails";

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
          path: "/service",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: ContactData,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMovies,
        },
        {
          path: "/movie/:moviesID",
          element: <MovieDetails />,
          loader: GetMovieDetails,
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
      <div className="wrapper bg-[#3c3c3c] min-h-screen w-full text-white text-4xl">
        <RouterProvider router={router} />
        {/* <Routes>
          {
            <Route path="/" element={<AppLayout />}>
              We only want to wrap all the child routes with the route of the
              appLayout and then it will run.
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
              <Route path="movie" element={<Movie />} loader={GetMovies} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          }
        </Routes> */}
      </div>
    </>
  );
}

export default App;

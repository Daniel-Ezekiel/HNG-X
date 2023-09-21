// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
// import Favourites from "./pages/Favourites";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies/:id",
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/favourites",
  //   element: <Favourites />,
  //   errorElement: <ErrorPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


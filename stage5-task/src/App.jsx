import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Ready from "./pages/Ready";
import Dashboard from "./pages/Dashboard";
import Video from "./pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/ready",
    element: <Ready />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/recent-videos/video",
    element: <Video />,
    // errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


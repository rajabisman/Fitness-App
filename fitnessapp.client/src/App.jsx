import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Home />
            </>
          ),
        },
        {
          path: "/login",
          element: (
            <>
              <Login />
            </>
          ),
        },
        {
          path: "/register",
          element: (
            <>
              <Register />
            </>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

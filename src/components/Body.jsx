import Login from "../components/Login";
import Browse from "../components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../components/Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },

    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

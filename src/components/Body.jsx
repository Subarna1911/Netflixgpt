import Login from "../components/Login";
import Browse from "../components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../components/Error";
import Mylist from "../pages/Mylist";
import Homepage from "../pages/Homepage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

  
    {
      path: "/browse",
      element: <Browse />,
      children:[

        {
          path:"",
          element:<Homepage/>
        },
        
        {
          path:'my-list',
          element:<Mylist/>
        },
      ]
    },

    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

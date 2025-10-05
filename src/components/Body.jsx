import Login from "../components/Login";
import Browse from "../components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../components/Error";
import Mylist from "../pages/Mylist";
import Homepage from "../pages/Homepage";
import MovieDetails from '../components/MovieDetails'
import Contact from '../pages/Contact'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

  
   {
  path: "/browse",
  element: <Browse />,
  children: [
    { path: "/browse", element: <Homepage /> },
    { path: "my-list", element: <Mylist /> },
      { path: "contact", element: <Contact /> },
    { path: "movie/:id", element: <MovieDetails /> }, // ✅ correct nesting
  ],
},
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

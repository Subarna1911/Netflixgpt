import React, { useEffect } from "react";
import Login from "../components/Login";
import Browse from "../components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import {removeUser}  from '../utils/userSlice';
import Error from '../components/Error';

const Body = () => {

  const dispatch = useDispatch();

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
      path:'/error',
      element:<Error/>,
    }

  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      
       const{uid, email,displayName} = user;
       dispatch(addUser({uid: uid, email: email, displayName: displayName}));

      } else {

        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;

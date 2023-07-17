import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllTools from "../Pages/AllTools/AllTools";
import SignUP from "../Pages/SignUP/SignUP";
import LogIn from "../Pages/LogIn/LogIn";
import { AuthenticationForm } from "../Components/AuthenticationForm/AuthenticationForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/allTools",
        element: <AllTools />,
      },
      // {
      //   path: "/logIn",
      //   element: <LogIn />,
      // },
      // {
      //   path: "/signUp",
      //   element: <SignUP />,
      // },
      {
        path: "/authentication",
        element: <AuthenticationForm />,
      },
    ],
  },
]);

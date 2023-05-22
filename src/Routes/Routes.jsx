import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Pricing from "../Components/Pricing/Pricing";
import AllTools from "../Pages/AllTools/AllTools";

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
        element: <AllTools/>,
      },
    ],
  },
]);

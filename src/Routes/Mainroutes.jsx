import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Posts from "../components/Posts";



const Mainroutes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/posts",
        element: <Posts></Posts>,
      },
    ],
  },
]);
export default Mainroutes;

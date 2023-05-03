import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import GetStarted from "../pages/GetStarted";
import Styles from "../pages/Styles";
import Components from "../pages/Components";

export default function PageRoutes() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/get-started",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <GetStarted />,
        },
      ],
    },
    {
      path: "/styles",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Styles />,
        },
      ],
    },
    {
      path: "/components",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Components />,
        },
      ],
    },
  ]);

  return <div>{elements}</div>;
}

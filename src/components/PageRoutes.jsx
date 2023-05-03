import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";

export default function PageRoutes() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: {
        index: true,
        element: <Home />,
      },
    },
  ]);

  return <div>{elements}</div>;
}

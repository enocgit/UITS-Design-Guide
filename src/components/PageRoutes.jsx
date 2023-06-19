import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import GetStarted from "../pages/GetStarted";
import Styles from "../pages/Styles";
import Components from "../pages/Components";
import Alerts from "../pages/components/Alerts";
import Bagdes from "../pages/components/Badges";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";
import Checkboxes from "../pages/components/Checkboxes";
import Forms from "../pages/components/Forms";
import Links from "../pages/components/Links";
import Modals from "../pages/components/Modals";
import Navigation from "../pages/components/Navigation";
import Tags from "../pages/components/Tags";
import Togglers from "../pages/components/Togglers";
import Animation from "../pages/styles/Animation";
import Color from "../pages/styles/Color";
import Iconography from "../pages/styles/Iconography";
import Typography from "../pages/styles/Typography";
import AdaptiveLayout from "../pages/AdaptiveLayout";
import LayoutPage from "../pages/adaptive-layout/LayoutPage";
import ResponsiveDesign from "../pages/adaptive-layout/ResponsiveDesign";

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
      element: <Layout backgroundColor="" />,
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
        {
          path: "animation",
          element: <Animation />,
        },
        {
          path: "color",
          element: <Color />,
        },
        {
          path: "iconography",
          element: <Iconography />,
        },
        {
          path: "typography",
          element: <Typography />,
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
        {
          path: "alerts",
          element: <Alerts />,
        },
        {
          path: "badges",
          element: <Bagdes />,
        },
        {
          path: "buttons",
          element: <Buttons />,
        },
        {
          path: "cards",
          element: <Cards />,
        },
        {
          path: "checkboxes",
          element: <Checkboxes />,
        },
        {
          path: "forms",
          element: <Forms />,
        },
        {
          path: "links",
          element: <Links />,
        },
        {
          path: "modals",
          element: <Modals />,
        },
        {
          path: "navigation",
          element: <Navigation />,
        },
        {
          path: "tags",
          element: <Tags />,
        },
        {
          path: "togglers",
          element: <Togglers />,
        },
      ],
    },
    {
      path: "/adaptive-layout",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <AdaptiveLayout />,
        },
        {
          path: "layout",
          element: <LayoutPage />,
        },
        {
          path: "responsive-design",
          element: <ResponsiveDesign />,
        },
      ],
    },
  ]);

  return <div>{elements}</div>;
}

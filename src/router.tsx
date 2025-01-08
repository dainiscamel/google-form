import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MakeForm from "./pages/MakeFOrm";
import PreviewForm from "./pages/PreviewForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MakeForm />,
      },
    ],
  },
  {
    path: "/preview",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PreviewForm />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MakeForm from "./pages/Form/MakeForm";
import PreviewForm from "./pages/Preview/PreviewForm";

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

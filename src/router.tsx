import { createBrowserRouter } from "react-router-dom";
import GoogleForm from "@/pages/GoogleForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GoogleForm />,
  },
]);

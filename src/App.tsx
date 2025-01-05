import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

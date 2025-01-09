import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "@/styles/theme";
import { StyledEngineProvider } from "@mui/material/styles";
import { store } from "@/store/store";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

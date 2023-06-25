import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppRoutes } from "router/AppRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useAuth from "common/hooks/useAuth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const router = createBrowserRouter(AppRoutes);

function App() {
  const { AuthProvider } = useAuth();
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

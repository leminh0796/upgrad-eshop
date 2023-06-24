import ErrorScreen from "screens/ErrorScreen";
import LoginScreen from "screens/LoginScreen";
import RootScreen from "screens/RootScreen";
import SignupScreen from "screens/SignupScreen";

export const AppRoutes = [
  {
    path: "/",
    element: <RootScreen />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/",
        element: <h1>home</h1>,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/signup",
        element: <SignupScreen />,
      },
    ],
  },
];

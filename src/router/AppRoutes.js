import ErrorScreen from "screens/ErrorScreen";
import LoginScreen from "screens/LoginScreen";
import RootScreen from "screens/RootScreen";
import SignupScreen from "screens/SignupScreen";
import ProductScreen, { loader as productLoader } from "screens/ProductScreen";
import AddProductScreen, {
  loader as addProductLoader,
} from "screens/AddProductScreen";

export const AppRoutes = [
  {
    path: "/",
    element: <RootScreen />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/",
        loader: productLoader,
        element: <ProductScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/signup",
        element: <SignupScreen />,
      },
      {
        path: "/add-product",
        loader: addProductLoader,
        element: <AddProductScreen />,
      },
    ],
  },
];

import ErrorScreen from "screens/ErrorScreen";
import LoginScreen from "screens/LoginScreen";
import RootScreen from "screens/RootScreen";
import SignupScreen from "screens/SignupScreen";
import ProductScreen, {
  loader as productLoader,
} from "screens/product/ProductScreen";
import AddProductScreen, {
  loader as addProductLoader,
} from "screens/AddProductScreen";
import ProductListScreen, {
  loader as productListLoader,
} from "screens/product/ProductListScreen";

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
        children: [
          {
            path: "/",
            element: <ProductListScreen />,
            loader: productListLoader,
          },
          {
            path: "/:productId",
            element: <h1>Product details</h1>,
          },
        ],
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
        path: "/admin/add-product",
        loader: addProductLoader,
        element: <AddProductScreen />,
      },
    ],
  },
];

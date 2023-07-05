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
import ModifyProductScreen, {
  loader as modifyProductLoader,
} from "screens/ModifyProductScreen";
import ProductListScreen, {
  loader as productListLoader,
} from "screens/product/ProductListScreen";
import ProductDetailScreen, {
  loader as productDetailLoader,
} from "screens/product/ProductDetailScreen";
import OrderScreen, { loader as orderLoader } from "screens/OrderScreen";

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
            path: "/products/:productId",
            element: <ProductDetailScreen />,
            loader: productDetailLoader,
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
        path: "/order",
        element: <OrderScreen />,
        loader: orderLoader,
      },
      {
        path: "/admin/add-product",
        loader: addProductLoader,
        element: <AddProductScreen />,
      },
    {
      path: "/admin/modify-product/:productId",
      loader: modifyProductLoader,
      element: <ModifyProductScreen />,
    }
    ],
  },
];

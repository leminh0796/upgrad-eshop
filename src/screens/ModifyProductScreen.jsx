import { getUserFromStorage } from "common/utils/apiClient";
import { getProduct } from "api/products";
import { redirect } from "react-router-dom";
import ModifyProductForm from "components/modifyProductForm/ModifyProductForm";

export const loader = async ({ params }) => {
  const user = getUserFromStorage();
  if (!user || !user.isAdmin) {
    return redirect("/login");
  }
  try {
    const product = await getProduct(params.productId);
    return { product };
  } catch (error) {
    return redirect("/login");
  }
};

export default function ModifyProductScreen() {
  return <ModifyProductForm />;
}

import { redirect } from "react-router-dom";
import AddProductForm from "../components/addProductForm/AddProductForm";
import { getCategories } from "api/products";
import { getUserFromStorage } from "common/utils/apiClient"

export async function loader() {
  const user = getUserFromStorage();
  if (!user || !user.isAdmin) {
    return redirect("/login");
  }

  const categories = await getCategories();
  return { categories };
}

export default function AddProductScreen() {
  return (
    <>
      <AddProductForm />
    </>
  );
}

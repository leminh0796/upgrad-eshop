import { redirect } from "react-router-dom";
import AddProductForm from "../components/addProductForm/AddProductForm";
import { getCategories } from "api/products";

export async function loader() {
  const token = localStorage.getItem("access_token");
  const isAdmin = localStorage.getItem("isAdmin");
  if (!token || !isAdmin) {
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

import { redirect } from "react-router-dom";
import { getCategories } from "api/products";
import CategoryTabs from "components/categoryTabs/CategoryTabs";
import { Outlet } from "react-router-dom";

export async function loader() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return redirect("/login");
  }
  try {
    const categories = await getCategories();
    return { categories };
  } catch (error) {
    return redirect("/login");
  }
}

export default function ProductScreen() {
  return (
    <div>
      <CategoryTabs />
      <Outlet />
    </div>
  );
}

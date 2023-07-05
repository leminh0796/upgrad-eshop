import { redirect } from "react-router-dom";
import { getCategories } from "api/products";
import CategoryTabs from "components/categoryTabs/CategoryTabs";
import { Outlet } from "react-router-dom";
import { getUserFromStorage } from "common/utils/apiClient";

export async function loader() {
  const user = getUserFromStorage();
  if (!user) {
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

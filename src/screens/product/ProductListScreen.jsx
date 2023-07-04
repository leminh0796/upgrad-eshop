import { redirect } from "react-router-dom";
import { getProducts } from "api/products";
import SortSelect from "common/components/sortSelect/SortSelect";
import Container from "@mui/material/Container";
import ProductGrid from "components/productGrid/ProductGrid";
import { getUserFromStorage } from "common/hooks/useAuth";

export async function loader() {
  const user = getUserFromStorage();
  if (!user) {
    return redirect("/login");
  }
  try {
    const products = await getProducts();
    return { products };
  } catch (error) {
    return redirect("/login");
  }
}

export default function ProductListScreen() {
  return (
    <>
      <Container maxWidth="lg">
        <SortSelect />
        <ProductGrid />
      </Container>
    </>
  );
}

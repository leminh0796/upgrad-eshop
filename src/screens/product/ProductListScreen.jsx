import { redirect } from "react-router-dom";
import { getProducts } from "api/products";
import SortSelect from "common/components/sortSelect/SortSelect";
import Container from "@mui/material/Container";
import ProductGrid from "components/productGrid/ProductGrid";

export async function loader() {
  const token = localStorage.getItem("access_token");
  if (!token) {
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

import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "components/productCard/ProductCard";
import Grid from "@mui/material/Grid";

export default function ProductGrid() {
  const { products } = useLoaderData();
  const filter = useSelector((state) => state.filter);
  const [categorizedProduct, setCategorizedProduct] = useState(products);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [searchedProducts, setSearchedProducts] = useState(products);

  useEffect(() => {
    if (filter.category !== "all") {
      setCategorizedProduct(
        products.filter((product) => product.category === filter.category)
      );
    } else {
      setCategorizedProduct(products);
    }
  }, [filter, products]);

  useEffect(() => {
    let sortedProducts = [...categorizedProduct];
    if (filter.sortBy === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (filter.sortBy === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filter.sortBy === "newest") {
      sortedProducts.sort((a, b) => {
        let x = a.id;
        let y = b.id;
        return x < y ? 1 : x > y ? -1 : 0;
      });
    } else {
      sortedProducts = categorizedProduct;
    }

    setSortedProducts(sortedProducts);
  }, [filter, categorizedProduct]);

  useEffect(() => {
    let searchedProducts = [...sortedProducts];
    if (filter.searchText) {
      searchedProducts = searchedProducts.filter((product) =>
        product.name.toLowerCase().includes(filter.searchText.toLowerCase())
      );
    }

    setSearchedProducts(searchedProducts);
  }, [filter, sortedProducts]);

  return (
    <Grid container spacing={2} padding={4} justifyContent="center">
      {searchedProducts.map((product) => {
        return (
          <Grid item xs={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
}

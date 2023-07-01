import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import store from "store";
import { setCategory } from "store/actions/filterActions";

export default function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories } = useLoaderData();
  let children = [
    <ToggleButton value="all" aria-label="all" key="all">
      All
    </ToggleButton>,
  ];

  useEffect(() => {
    store.dispatch(setCategory(selectedCategory));
  }, [selectedCategory]);

  categories.forEach((category) => {
    children.push(
      <ToggleButton value={category} aria-label={category} key={category}>
        {category}
      </ToggleButton>
    );
  });

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory) {
      setSelectedCategory(newCategory);
    }
  };

  const control = {
    value: selectedCategory,
    onChange: handleCategoryChange,
    exclusive: true,
  };

  return (
    <ToggleButtonGroup
      sx={{ width: "100%", justifyContent: "center", mt: 2 }}
      {...control}
      aria-label="category tabs"
    >
      {children}
    </ToggleButtonGroup>
  );
}

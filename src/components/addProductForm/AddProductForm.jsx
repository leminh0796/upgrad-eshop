import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { addProduct } from "api/products";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

export default function SignUpForm() {
  const { categories } = useLoaderData();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    manufacturer: "",
    availableItems: "",
    price: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCategoryChange = (newValue) => {
    setFormData({
      ...formData,
      category: newValue?.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addProduct(formData);
      toast.success(`Product ${formData.name} added successfully`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Typography component="h1" variant="h5">
        Add Product
      </Typography>
      <Box component="form" sx={{ width: 450, mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          onChange={handleChange}
          autoFocus
        />
        <CreatableSelect
          isClearable
          className="category-select-container"
          styles={{
            container: (baseStyles) => ({
              ...baseStyles,
              marginTop: 8,
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              zIndex: 100,
            }),
          }}
          options={categories.map((category) => ({
            value: category,
            label: category,
          }))}
          required={true}
          placeholder="Category *"
          id="category"
          name="category"
          onChange={handleCategoryChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="manufacturer"
          label="Manufacturer"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="availableItems"
          label="Available Items"
          name="availableItems"
          type="number"
          value={formData.availableItems}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="price"
          value={formData.price}
          onChange={handleChange}
          label="Price"
          type="number"
          id="price"
        />
        <TextField
          margin="normal"
          fullWidth
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          label="Image URL"
          id="imageUrl"
        />
        <TextField
          margin="normal"
          fullWidth
          name="description"
          value={formData.description}
          onChange={handleChange}
          label="Product Description"
          id="description"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          SAVE PRODUCT
        </Button>
      </Box>
    </Box>
  );
}

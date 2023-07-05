import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { modifyProduct } from "api/products";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

export default function ModifyProductForm() {
  const { product } = useLoaderData();
  const [formData, setFormData] = useState({
    name: product.name || "",
    category: product.category || "",
    manufacturer: product.manufacturer || "",
    availableItems: product.availableItems || "",
    price: product.price || "",
    imageUrl: product.imageUrl || "",
    description: product.description || "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await modifyProduct(product.id, formData);
      toast.success(`Product ${formData.name} modified successfully`);
    } catch (error) {
      toast.error("Modify Product Failed");
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
        Modify Product
      </Typography>
      <Box component="form" sx={{ width: 450, mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          id="category"
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          autoFocus
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

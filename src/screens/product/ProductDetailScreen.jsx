import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { getProduct } from "api/products";
import {
  Container,
  Grid,
  Box,
  Typography,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import store from "store";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return redirect("/login");
  }
  try {
    const product = await getProduct(params.productId);
    return { product };
  } catch (error) {
    return redirect("/login");
  }
}

export default function ProductDetailScreen() {
  const { product } = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch({
      type: "PLACE_ORDER",
      payload: {
        product: product,
        quantity: parseInt(quantity),
        address: null
      },
    });
    navigate("/order");
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 8 }}>
      <Grid container spacing={6} padding={4} justifyContent="center">
        <Grid item xs={5}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h4">{product.name}</Typography>
            <Chip
              color="primary"
              label={`Available quantity : ${product.availableItems}`}
            />
          </Box>
          <Typography variant="p">
            Category: <b>{product.category}</b>
          </Typography>
          <Typography variant="p" sx={{ marginY: 1 }}>
            <i>{product.description}</i>
          </Typography>
          <Typography variant="h5" color="red">
            ₹ {product.price}
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Enter quantity"
              variant="outlined"
              required
              sx={{ width: 300 }}
              type="number"
              id="quantity"
              name="quantity"
              defaultValue={1}
              onChange={(event) => setQuantity(event.target.value)}
              inputProps={{ min: 1, max: product.availableItems }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, width: 140 }}
              disabled={quantity > product.availableItems || quantity <= 0}
            >
              Place order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

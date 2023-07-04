import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function OrderStepOne() {
  const { product, quantity } = useSelector((state) => state.order);
  return (
    <Grid container spacing={2} padding={4} justifyContent="center">
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
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "1rem",
          gap: 2,
        }}
      >
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="p">
          Quantity: <b>{quantity}</b>
        </Typography>
        <Typography variant="p">
          Category: <b>{product.category}</b>
        </Typography>
        <Typography variant="p">
          <i>{product.description}</i>
        </Typography>
        <Typography variant="h5" color="red">
          Total Price : ₹ {product.price * quantity}
        </Typography>
      </Grid>
    </Grid>
  );
}

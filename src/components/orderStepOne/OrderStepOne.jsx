import { Grid } from "@mui/material";
import OrderInformation from "components/orderInformation/OrderInformation";
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
        <OrderInformation product={product} quantity={quantity} />
      </Grid>
    </Grid>
  );
}

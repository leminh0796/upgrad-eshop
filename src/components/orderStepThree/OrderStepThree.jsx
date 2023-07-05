import { Card, Grid, Box, Divider, Typography } from "@mui/material";
import OrderInformation from "components/orderInformation/OrderInformation";
import { useSelector } from "react-redux";

export default function OrderStepThree() {
  const { product, quantity, address } = useSelector((state) => state.order);
  return (
    <Card>
      <Grid container>
        <Grid
          item
          xs={7}
          sx={{
            fontSize: "initial",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 4,
          }}
        >
          <OrderInformation product={product} quantity={quantity} />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
        <Grid
          item
          xs={5}
          sx={{
            fontSize: "initial",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 4,
          }}
        >
          <Typography variant="h4">Address Details :</Typography>
          <Typography variant="p">{address.name}</Typography>
          <Typography variant="p">
            Contact Number: {address.contactNumber}
          </Typography>
          <Typography variant="p">
            {address.street}, {address.state}
          </Typography>
          <Typography variant="p">
            {address.city}
          </Typography>
          <Typography variant="p">
            {address.zipcode}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

import { Typography } from "@mui/material";

export default function OrderInformation(props) {
  const { product, quantity } = props;
  return (
    <>
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
    </>
  );
}

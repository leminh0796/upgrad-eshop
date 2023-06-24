import { ShoppingCart } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <ShoppingCart sx={{ mr: 1 }} />
      <Typography variant="h6" component="div" nowrap sx={{ display: "block" }}>
        upGrad E-Shop
      </Typography>
    </Box>
  );
};

export default Logo;

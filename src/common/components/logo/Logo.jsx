import { ShoppingCart } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ShoppingCart sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          component="div"
          nowrap="true"
          sx={{ display: "block" }}
        >
          upGrad E-Shop
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;

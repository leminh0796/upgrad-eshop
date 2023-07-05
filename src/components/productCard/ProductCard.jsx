import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, IconButton, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useAuth } from "common/hooks/useAuth";

export default function ProductCard(props) {
  const { product } = props;
  const { user } = useAuth();

  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 380,
        display: "flex",
        flexDirection: "column",
        marginBottom: 4,
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent
        height="130"
        sx={{ overflowY: "scroll", marginBottom: "auto" }}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={8}>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h6" component="div">
              ₹ {product.price}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item xs={9}>
            <Link to={`/products/${product.id}`}>
              <Button variant="contained" size="small">
                Buy
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
            {user && user.isAdmin && (
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Link to={`/admin/modify-product/${product.id}`}>
                    <IconButton aria-label="delete" size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};

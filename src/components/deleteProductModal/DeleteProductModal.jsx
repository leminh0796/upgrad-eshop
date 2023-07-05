import { useState, useEffect } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "store/actions/productActions";
import { deleteProduct } from "api/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function DeleteProductModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { modalOpen, product } = useSelector((state) => state.product);

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  const handleClose = () => {
    dispatch(closeModal());
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(product.id);
      toast.success(`Product ${product.name} deleted successfully!`);
      dispatch(closeModal());
      navigate("/");
    } catch (error) {
      toast.error(`Error deleting product ${product.name}!`);
    }
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-delete-product"
      aria-describedby="modal-delete-product-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 2,
        }}
      >
        <Typography id="modal-delete-product" variant="h6" component="h2">
          Confirm deletion of product!
        </Typography>
        <Typography id="modal-delete-product-description" sx={{ mt: 2 }}>
          Are you sure you want to delete the product?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            sx={{ mr: 1 }}
            variant="contained"
            color="primary"
            onClick={handleDeleteProduct}
          >
            OK
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { addAddress } from "api/addresses";
import { toast } from "react-toastify";

export default function AddAddressForm({ onAddAddres }) {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    street: "",
    city: "",
    state: "",
    landmark: "",
    zipcode: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addAddress(formData);
      onAddAddres();
      toast.success("New address added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 2,
      }}
    >
      <Typography component="h1" variant="h5">
        Add Address
      </Typography>
      <Box component="form" sx={{ width: 450, mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          onChange={handleChange}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactNumber"
          label="Contact Number"
          name="contactNumber"
          type="tel"
          autoComplete="tel"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="street"
          label="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="city"
          value={formData.city}
          onChange={handleChange}
          label="City"
          id="city"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="state"
          value={formData.state}
          onChange={handleChange}
          label="State"
          id="state"
        />
        <TextField
          margin="normal"
          fullWidth
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          label="Landmark"
          id="landmark"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="zipcode"
          value={formData.zipCode}
          onChange={handleChange}
          label="Zip Code"
          id="zipCode"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          SAVE ADDRESS
        </Button>
      </Box>
    </Box>
  )
}

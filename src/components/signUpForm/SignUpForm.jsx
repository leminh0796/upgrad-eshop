import { useState } from "react";
import { Avatar, FormControlLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { signUp } from "api/auth";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  });
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await signUp(formData);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box component="form" sx={{ width: 450, mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="given-name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="family-name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          type="password"
          id="confirmPassword"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          label="Contact Number"
          type="tel"
          id="contactNumber"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs />
          <Grid item xs>
            <Link href="/login" variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

import { useState, useEffect } from "react";
import { getAddresses } from "api/addresses";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import { Box, TextField, Button, Typography } from "@mui/material";
import AddAddressForm from "components/addAddressForm/AddAddressForm";

export default function OrderStepTwo() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    try {
      const addresses = await getAddresses();
      setAddresses(addresses);
    } catch (error) {
      localStorage.removeItem("data");
      navigate("/login");
      toast.error("Please login again");
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const addAddress = () => {
    fetchAddresses();
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        margin: "auto",
        fontSize: "1rem",
        maxWidth: 800,
        justifyContent: "center",
      }}
    >
      <label>Select Address</label>
      <Select
        options={addresses.map((address) => {
          return {
            value: address.id,
            label: `${address.name}-->${address.street}, ${address.city}`,
          };
        })}
        name="address"
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            maxWidth: 800,
          }),
        }}
      />
      <Typography variant="p" sx={{ marginTop: 2, textAlign: "center" }}>
        -OR-
      </Typography>
      <AddAddressForm onAddAddress={addAddress} />
    </Box>
  );
}

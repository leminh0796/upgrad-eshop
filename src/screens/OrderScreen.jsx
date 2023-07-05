import { useState } from "react";
import {
  Container,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";
import OrderStepOne from "components/orderStepOne/OrderStepOne";
import OrderStepTwo from "components/orderStepTwo/OrderStepTwo";
import OrderStepThree from "components/orderStepThree/OrderStepThree";
import store from "store";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserFromStorage } from "common/utils/apiClient";
import { useAuth } from "common/hooks/useAuth";
import { createOrder } from "api/orders";

export function loader() {
  const user = getUserFromStorage();
  if (!user) {
    return redirect("/login");
  }
  if (
    store.getState().order.product === null ||
    store.getState().order.quantity === 0
  ) {
    return redirect("/");
  }
  return {};
}

const steps = ["Items", "Select Address", "Confirm Order"];

export default function OrderScreen() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { product, quantity, address } = useSelector((state) => state.order);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === 1 && address === null) {
      setActiveStep((prevActiveStep) => prevActiveStep);
      toast.error("Please select an address");
    } else if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      handlePlaceOrder();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <OrderStepOne />;
      case 1:
        return <OrderStepTwo />;
      case 2:
        return <OrderStepThree />;
      default:
        return "Unknown step";
    }
  };

  const handlePlaceOrder = async () => {
    const order = {
      product: product.id,
      quantity: quantity,
      address: address.id,
      user: user.id,
    };
    try {
      await createOrder(order);
      toast.success("Order placed successfully");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 8 }}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, _) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            {renderStep(activeStep)}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              color="inherit"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Place Order" : "Next"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

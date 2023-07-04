export const placeOrder = (product, quantity, address = null) => {
  return {
    type: "PLACE_ORDER",
    payload: {
      product,
      quantity,
      address,
    },
  };
};

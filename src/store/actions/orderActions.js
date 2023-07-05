export const placeOrder = (product, quantity) => {
  return {
    type: "PLACE_ORDER",
    payload: {
      product,
      quantity,
    },
  };
};

export const setAddress = (address) => {
  return {
    type: "SET_ADDRESS",
    payload: address,
  };
}

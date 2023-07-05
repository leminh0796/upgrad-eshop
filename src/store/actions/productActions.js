export const openModal = (product) => {
  return {
    type: "OPEN_MODAL",
    payload: {
      product,
    },
  };
}

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
}

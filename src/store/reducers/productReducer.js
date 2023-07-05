const initialState = {
  modalOpen: false,
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
        product: action.payload.product,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export default productReducer;

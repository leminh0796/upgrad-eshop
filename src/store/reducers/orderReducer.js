const initialState = {
  product: null,
  address: null,
  quantity: 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return {
        ...state,
        product: action.payload.product,
        quantity: action.payload.quantity,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;

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
        address: action.payload.address,
        quantity: action.payload.quantity,
      };
    default:
      return state;
  }
};

export default orderReducer;

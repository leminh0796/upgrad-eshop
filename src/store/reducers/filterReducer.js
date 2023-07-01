const initialState = {
  category: "all",
  sortBy: "default",
  searchText: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      }
    default:
      return state;
  }
};

export default filterReducer;

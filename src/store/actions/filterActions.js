export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category,
  };
};

export const setSortBy = (sortBy) => {
  return {
    type: "SET_SORT_BY",
    payload: sortBy,
  };
};

export const setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    payload: searchText,
  };
};

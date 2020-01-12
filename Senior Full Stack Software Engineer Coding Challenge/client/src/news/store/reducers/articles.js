const articles = (state = [], action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default articles;

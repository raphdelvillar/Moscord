const articles = (state = [], action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return [...state];
    default:
      return state;
  }
};

export default articles;

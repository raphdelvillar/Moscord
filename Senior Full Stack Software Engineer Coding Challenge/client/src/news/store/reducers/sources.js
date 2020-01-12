const sources = (state = [], action) => {
  switch (action.type) {
    case "SET_SOURCES":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default sources;

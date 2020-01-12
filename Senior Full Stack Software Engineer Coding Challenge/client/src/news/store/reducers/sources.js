const sources = (state = [], action) => {
  switch (action.type) {
    case "SET_SOURCES":
      return [...state];
    default:
      return state;
  }
};

export default sources;

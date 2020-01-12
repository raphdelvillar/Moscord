export const setArticles = articles => ({
  type: "SET_ARTICLES",
  articles
});

export const fetchArticles = () => ({
  type: "FETCH_ARTICLES"
});

export const setSources = sources => ({
  type: "SET_SOURCES",
  sources
});

export const fetchSources = () => ({
  type: "FETCH_SOURCES"
});

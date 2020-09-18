export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export type SearchAction = {
  type: typeof SET_SEARCH_QUERY,
  payload: string,
}

export const setSearchQuery = (query: string) => {
  return ({
    type: SET_SEARCH_QUERY,
    payload: query
  })
}
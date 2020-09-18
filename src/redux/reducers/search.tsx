import { SearchAction, SET_SEARCH_QUERY } from '../actions/search';

type SearchState = string;

const initialState = "";

export default function searchReducer(state: SearchState = initialState, action: SearchAction) : SearchState {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
}

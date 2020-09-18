import { combineReducers } from 'redux';

import countryReducer from './country';
import searchReducer from './search';
import themeReducer from './theme';

const rootReducer = combineReducers({
	countries: countryReducer,
	theme: themeReducer,
	search: searchReducer
});

export default rootReducer;

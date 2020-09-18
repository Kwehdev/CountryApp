import { combineReducers } from 'redux';

import countryReducer from './country';

const rootReducer = combineReducers({ countries: countryReducer });

export default rootReducer;

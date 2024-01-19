

import { combineReducers } from '@reduxjs/toolkit';
import layoutReducer from './layoutReducer';
import globalReducer from './globalReducer';
const rootReducer = combineReducers({
    TRADE_LAYOUT: layoutReducer,
    GLOBAL_VALUE: globalReducer,
});
export default rootReducer;
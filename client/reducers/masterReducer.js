import { combineReducers } from 'redux';
// IMPORT ALL REDUCERS HERE
import stretchesReducer from './stretchesReducer';

const reducers = combineReducers({
  stretches: stretchesReducer,
});

export default reducers;

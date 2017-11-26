import { combineReducers } from 'redux';
import { menuReducer } from './menu.reducer.js';

export const appReducers = combineReducers({
    menu: menuReducer
});

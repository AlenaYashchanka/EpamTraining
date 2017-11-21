import { combineReducers } from 'redux';
import { menuReducer } from './menu.reducer';

export const appReducers = combineReducers({
    menu: menuReducer
});

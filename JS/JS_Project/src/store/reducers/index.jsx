import { combineReducers } from 'redux';
import { menuReducer } from './menu.reducer.jsx';

export const appReducers = combineReducers({
    menu: menuReducer
});

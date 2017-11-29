import { combineReducers } from 'redux';
import { menuReducer } from './menu.reducer.js';
import { simpleSearchReducer } from './simple-search.reducer.js';
import { itemsReducer } from './itemsReducer'

export const appReducers = combineReducers({
    menu: menuReducer,
    search: simpleSearchReducer,
    items: itemsReducer
});

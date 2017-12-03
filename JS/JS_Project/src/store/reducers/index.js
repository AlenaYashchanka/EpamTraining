import { combineReducers } from 'redux';
import { menuReducer } from './menu.reducer.js';
import { simpleSearchReducer } from './simple-search.reducer.js';
import { priceSearchReducer } from './price-search.reducer';
import { currencySearchReducer } from './currency-search.reducer';
import { retailerSearchReducer } from './retailer-search.reducer';
import { brandSearchReducer } from './brand-search.reducer'
import { itemsReducer } from './itemsReducer'
import { showItemReducer } from './show-item.reducer'

export const appReducers = combineReducers({
    menu: menuReducer,
    search: simpleSearchReducer,
    pricesearch: priceSearchReducer,
    currencysearch: currencySearchReducer,
    retailersearch: retailerSearchReducer,
    brandsearch: brandSearchReducer,
    items: itemsReducer,
    showItem: showItemReducer
});

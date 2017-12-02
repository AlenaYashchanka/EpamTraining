import { START_SIMPLE_SEARCH } from './../actions/';
import { START_SEARCH_CURRENCY } from './../actions/';
import { START_SEARCH_PRICE } from './../actions/';
import { START_SEARCH_RETAILER } from './../actions/';
import { START_SEARCH_BRAND } from './../actions/';

const initialState = {
    state: 'INITIAL',
    inputValue: '',
    
}

export function simpleSearchReducer(state = initialState, action) {
    switch (action.type) {
        case START_SIMPLE_SEARCH:
            return {
                state,
                inputValue: action.payload
            }
        default:
            return state;
    }
}
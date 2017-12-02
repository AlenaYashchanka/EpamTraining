import { START_SEARCH_PRICE } from './../actions/';

const initialState = {
    state: 'INITIAL',
    priceValue: '',
}


export function priceSearchReducer(state = initialState, action) {
    switch (action.type) {
        case START_SEARCH_PRICE:
        return {
            state,
            priceValue: action.payload
        };
        default:
            return state;
    }
}

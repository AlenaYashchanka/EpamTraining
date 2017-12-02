import { START_SEARCH_CURRENCY } from './../actions/';

const initialState = {
    state: 'INITIAL',
    currencyValue: '',
}


export function currencySearchReducer(state = initialState, action) {
    switch (action.type) {
        case START_SEARCH_CURRENCY:
        return {
            state,
            currencyValue: action.payload
        };
        default:
            return state;
    }
}

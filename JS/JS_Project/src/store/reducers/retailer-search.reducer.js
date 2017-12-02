import { START_SEARCH_RETAILER } from './../actions/';

const initialState = {
    state: 'INITIAL',
    retailerValue: '',
}


export function retailerSearchReducer(state = initialState, action) {
    switch (action.type) {
        case START_SEARCH_RETAILER:
        return {
            state,
            retailerValue: action.payload
        };
        default:
            return state;
    }
}

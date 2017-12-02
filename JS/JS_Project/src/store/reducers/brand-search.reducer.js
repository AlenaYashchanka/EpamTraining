import { START_SEARCH_BRAND } from './../actions/';

const initialState = {
    state: 'INITIAL',
    brandValue: '',
}


export function brandSearchReducer(state = initialState, action) {
    switch (action.type) {
        case START_SEARCH_BRAND:
        return {
            state,
            brandValue: action.payload
        };
        default:
            return state;
    }
}

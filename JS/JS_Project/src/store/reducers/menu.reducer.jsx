import { CHANGE_SIDEBAR_STATE } from './../actions/index.jsx';

const initialState = {
    state: 'INITIAL',
    isOpened: false
}

export function menuReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SIDEBAR_STATE:
            return {
                state,
                isOpened: !state.isOpened
            };
        default:
            return state;
    }
}
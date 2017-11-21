import { CLICK_LOGO } from './../actions/index';

const initialState = {
    state: 'INITIAL',
    isOpened: false
}

export function menuReducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_LOGO:
            return {
                isOpened: !state.isOpened,
            };
        default:
            return state;
    }
}
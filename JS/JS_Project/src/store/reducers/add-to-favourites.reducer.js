import { ADD_TO_FAVOURITES } from './../actions/';
import { HIDE_SIGN_FAVOURITES } from './../actions/';

const initialState = {
    state: 'INITIAL',
    favouritesItems: [],
    isClicked: false
}

let arrFavourites = []

export function addTofavouritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            arrFavourites.push(action.payload);
            console.log('===============================');
            console.log("ARRFAVOURITES", arrFavourites);
            console.log('===============================');
            return {
                state,
                favouritesItems: arrFavourites,
                isClicked: true
            };
        case HIDE_SIGN_FAVOURITES:
        return {
            state,
            favouritesItems: arrFavourites,
            isClicked: false
        };
        default:
            return state;
    }
}
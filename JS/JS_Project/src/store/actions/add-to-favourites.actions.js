import { ADD_TO_FAVOURITES } from './add-to-favouries.types'
import { HIDE_SIGN_FAVOURITES } from './add-to-favouries.types'


export function addToFavourites(payload) {
    return {
        type: ADD_TO_FAVOURITES,
        payload
    }
}

export function hideSignFavourites(payload) {
    return {
        type: HIDE_SIGN_FAVOURITES,
        payload
    }
}

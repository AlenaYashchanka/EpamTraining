import { CLICK_LOGO } from './menu.types';

export function clickLogo(payload) {
    return {
        type: CLICK_LOGO,
        payload
    }
}

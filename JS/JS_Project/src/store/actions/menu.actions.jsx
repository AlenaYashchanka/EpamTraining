import { CHANGE_SIDEBAR_STATE } from './menu.types.jsx';

export function menuCollapsed(payload) {
    return {
        type: CHANGE_SIDEBAR_STATE,
        payload
    }
}

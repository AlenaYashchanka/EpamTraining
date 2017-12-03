import { SHOW_DETAILED_INFO }  from './show-item.types.js';

export function showDetailedInfo(payload) {
    return {
        type: SHOW_DETAILED_INFO,
        payload
    }
}

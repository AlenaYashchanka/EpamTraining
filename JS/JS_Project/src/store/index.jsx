import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducers } from './reducers/index.jsx';
import { logger } from './middleware/index.jsx';

const appStore = createStore(
    appReducers,
    composeWithDevTools(
        applyMiddleware(store => next => action =>
            typeof action === 'function'
                ? action(store.dispatch, store.getState)
                : next(action), logger
        )
    )
)

export default appStore;
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 100
})) || compose

const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(thunk),
    window.REDUX_DEVTOOLS_EXTENSION ? window.devToolsExtension() : f => f,
)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}
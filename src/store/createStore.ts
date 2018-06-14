import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { rootReducer, RootState } from "./rootReducer";
import { loadState } from "../localStorage";

const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        window &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const history = createHistory();

function configureStore(initialState?: RootState) {
    // configure middlewares
    const middlewares: Middleware[] = [routerMiddleware(history)];
    // compose enhancers
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    // create store
    return createStore<RootState, any, any, any>(
        enableBatching(rootReducer),
        initialState!,
        enhancer
    );
}

// get state from localStorage to rehydrate state.
const persistedState = loadState();

// pass an optional param to rehydrate state on app start
export const store = configureStore(persistedState);

// export store singleton instance
export default store;

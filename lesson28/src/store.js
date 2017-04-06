import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import { routerReducer } from 'react-router-redux';

import * as reducers from './reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(combineReducers({
    user: reducers.userReducer,
    news: reducers.newsReducer,

    //routing: routerReducer
}), middlewares);

export default store;


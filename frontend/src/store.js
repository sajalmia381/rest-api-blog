import {createStore, applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk';

import RootReducers from './reducers';

const initialstate = {};

export default createStore(
    RootReducers,
    initialstate,
    composeWithDevTools(applyMiddleware(thunk))
)
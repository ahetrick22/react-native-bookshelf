import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { State } from './constants/interfaces';
import { rootReducer } from './reducers';

const middleware = [logger, thunk];

const initialAppState: State = {
  library: [],
  currentBooks: []
};

export const Store = createStore(rootReducer, initialAppState, composeWithDevTools(applyMiddleware(...middleware)));

 
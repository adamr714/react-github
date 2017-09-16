import {createStore, applyMiddleware} from 'redux';
import thunk from 'reduc-thunk';

import * as reducers from './reducers/index';

export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));
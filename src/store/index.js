import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootSaga from '../sagas';
import todo from './todo';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ todo });
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSaga);

export default store;

import { call, all } from 'redux-saga/effects';
import todoSaga from './todo';

export default function* rootSaga() {
	yield all([todoSaga()]);
}

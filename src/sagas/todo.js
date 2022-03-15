import { call, takeEvery, put } from 'redux-saga/effects';
import { getTodoList } from '../api/todo';
import {
	TODO_LIST_REQUEST,
	todoListSuccess,
	todoListFailure,
} from '../store/todo';

function* getTodoListSaga() {
	try {
		const todoList = yield call(getTodoList);
		yield put(todoListSuccess({ todoList }));
	} catch {
		yield put(todoListFailure);
	}
}

export default function* todoSaga() {
	yield takeEvery(TODO_LIST_REQUEST, getTodoListSaga);
}

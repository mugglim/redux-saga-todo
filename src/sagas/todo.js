import { call, takeEvery, put } from 'redux-saga/effects';
import { getTodoList } from '../api/todo';
import { TYPES, ACTIONS } from '../actions/todo';

function* getTodoListSaga() {
	const actions = ACTIONS.todoList;

	try {
		const todoList = yield call(getTodoList);
		yield put(actions.onSuccess(todoList));
	} catch {
		yield put(actions.onFail());
	}
}

export default function* todoSaga() {
	yield takeEvery(TYPES.TODO_LIST_REQUEST, getTodoListSaga);
}

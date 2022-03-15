import { produce } from 'immer';

const initalState = {
	todoList: [],
};

export const TODO_LIST_REQUEST = 'todo/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todo/TODO_LIST_SUCCESS';
export const TODO_LIST_FAILURE = 'todo/TODO_LIST_FAILURE';
export const DELETE_TODO = 'todo/TODO_DELETE';

export const handleTodoListRequest = () => ({
	type: TODO_LIST_REQUEST,
});

export const todoListSuccess = todoList => ({
	type: TODO_LIST_SUCCESS,
	payload: { todoList },
});

export const todoListFailure = () => ({
	type: TODO_LIST_FAILURE,
});

export const handleDeleteTodo = _id => ({
	type: DELETE_TODO,
	payload: { _id },
});

export default function todoReducer(state = initalState, { type, payload }) {
	return produce(state, draft => {
		switch (type) {
			case TODO_LIST_SUCCESS:
				draft.todoList = [...payload.todoList];
				break;
			case DELETE_TODO:
				draft.todoList = draft.todoList.filter(({ id }) => id !== payload._id);
				break;
			default:
				break;
		}
	});
}

export const TODO_LIST_REQUEST = 'todo/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todo/TODO_LIST_SUCCESS';
export const TODO_LIST_FAILURE = 'todo/TODO_LIST_FAILURE';

export const todoListSuccess = todoList => ({
	type: TODO_LIST_SUCCESS,
	payload: { todoList },
});

export const todoListFailure = () => ({
	type: TODO_LIST_FAILURE,
});

const initalState = {
	todoList: [],
};

export default function todoReducer(
	todoState = initalState,
	{ type, payload },
) {
	switch (type) {
		case TODO_LIST_SUCCESS:
			const { todoList } = payload;
			return { ...todoList };
		case TODO_LIST_FAILURE:
			return { ...todoState };
		default:
			return todoState;
	}
}

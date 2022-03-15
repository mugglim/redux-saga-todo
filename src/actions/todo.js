export const TYPES = {
	TODO_LIST_REQUEST: 'todo/TODO_LIST_REQUEST',
	TODO_LIST_SUCCESS: 'todo/TODO_LIST_SUCCESS',
	TODO_LIST_FAILURE: 'todo/TODO_LIST_FAILURE',
	DELETE_TODO: 'todo/TODO_DELETE',
};

export const ACTIONS = {
	todoList: {
		onRequest: () => ({
			type: TYPES.TODO_LIST_REQUEST,
		}),
		onSuccess: todoList => ({
			type: TYPES.TODO_LIST_SUCCESS,
			payload: { todoList },
		}),
		onFail: () => ({
			type: TYPES.TODO_LIST_FAILURE,
		}),
	},
	todo: {
		onDelete: _id => ({
			type: TYPES.DELETE_TODO,
			payload: { _id },
		}),
	},
};

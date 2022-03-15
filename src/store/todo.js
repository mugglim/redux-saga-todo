export const TODO_LIST_REQUEST = 'todo/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todo/TODO_LIST_SUCCESS';
export const TODO_LIST_FAILURE = 'todo/TODO_LIST_FAILURE';

export const DELETE_TODO = 'todo/TODO_DELETE';

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

const initalState = {
	todoList: [],
};

export default function todoReducer(state = initalState, { type, payload }) {
	switch (type) {
		case TODO_LIST_SUCCESS:
			const { todoList } = payload;
			return { ...todoList };
		case DELETE_TODO:
			const { _id } = payload;
			return {
				...state,
				todoList: [...state.todoList.filter(({ id }) => id !== _id)],
			};
		case TODO_LIST_FAILURE:
		default:
			return state;
	}
}

import { produce } from 'immer';
import { TYPES } from '../actions/todo';

const initalState = {
	todoList: [],
};

export default function todoReducer(state = initalState, { type, payload }) {
	return produce(state, draft => {
		switch (type) {
			case TYPES.TODO_LIST_SUCCESS:
				draft.todoList = [...payload.todoList];
				break;
			case TYPES.DELETE_TODO:
				draft.todoList = draft.todoList.filter(({ id }) => id !== payload._id);
				break;
			default:
				break;
		}
	});
}

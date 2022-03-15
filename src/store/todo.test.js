import { TYPES, ACTIONS } from '../actions/todo';
import todoReducer from './todo';

describe('todo store', () => {
	describe('actions', () => {
		it('onRequest in todoList', () => {
			expect(ACTIONS.todoList.onRequest()).toEqual({
				type: TYPES.TODO_LIST_REQUEST,
			});
		});

		it('onSuccess in todoList', () => {
			const todoList = [
				{ id: 1, title: 'java' },
				{ id: 2, title: 'c++' },
			];
			expect(ACTIONS.todoList.onSuccess(todoList)).toEqual({
				type: TYPES.TODO_LIST_SUCCESS,
				payload: { todoList },
			});
		});

		it('onFail in todoList', () => {
			expect(ACTIONS.todoList.onFail()).toEqual({
				type: TYPES.TODO_LIST_FAILURE,
			});
		});

		it('onDelete in todo', () => {
			expect(ACTIONS.todo.onDelete('1')).toEqual({
				type: TYPES.DELETE_TODO,
				payload: { _id: '1' },
			});
		});
	});

	describe('reducer', () => {
		it('should init todo', () => {
			const initalState = {
				todoList: [
					{ id: 1, title: 'java' },
					{ id: 2, title: 'c++' },
				],
			};

			const nextState = todoReducer(
				{},
				ACTIONS.todoList.onSuccess([
					{ id: 1, title: 'java' },
					{ id: 2, title: 'c++' },
				]),
			);

			expect(initalState).toEqual(nextState);
		});

		it('should delete todo', () => {
			const initalState = {
				todoList: [
					{ id: 1, title: 'java' },
					{ id: 2, title: 'c++' },
				],
			};

			const nextState = todoReducer(initalState, ACTIONS.todo.onDelete(1));

			expect(nextState).toEqual({
				todoList: [{ id: 2, title: 'c++' }],
			});
		});
	});
});

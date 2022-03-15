import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTIONS } from '../../actions/todo';

import Todo from '../Todo';

export default function TodoList() {
	const dispatch = useDispatch();
	const { todoList } = useSelector(state => state.todo);

	useEffect(() => {
		dispatch(ACTIONS.todoList.onRequest());
	}, []);

	const handleTodoListClick = ({ target }) => {
		const { tagName } = target;
		const { id } = target.dataset;

		if (id && tagName === 'BUTTON') {
			dispatch(ACTIONS.todo.onDelete(+id));
		}
	};

	return (
		<ul onClick={handleTodoListClick}>
			{todoList &&
				todoList.map(({ id, title }) => (
					<Todo key={id} id={id} title={title} />
				))}
		</ul>
	);
}

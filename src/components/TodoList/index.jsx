import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteTodo } from '../../store/todo';
import Todo from '../Todo';

export default function TodoList() {
	const dispatch = useDispatch();
	const { todoList } = useSelector(state => state.todo);

	useEffect(() => {
		dispatch({ type: 'todo/TODO_LIST_REQUEST' });
	}, []);

	const handleTodoListClick = ({ target }) => {
		const { tagName } = target;
		const { id } = target.dataset;

		if (id && tagName === 'BUTTON') {
			dispatch(handleDeleteTodo(+id));
		}
	};

	return (
		<ul onClick={handleTodoListClick}>
			{todoList &&
				todoList.map(({ id, title, status }) => (
					<Todo key={id} id={id} title={title} status />
				))}
		</ul>
	);
}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTodoListRequest, handleDeleteTodo } from '../../store/todo';
import Todo from '../Todo';

export default function TodoList() {
	const dispatch = useDispatch();
	const { todoList } = useSelector(state => state.todo);

	useEffect(() => {
		dispatch(handleTodoListRequest());
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
				todoList.map(({ id, title }) => (
					<Todo key={id} id={id} title={title} />
				))}
		</ul>
	);
}

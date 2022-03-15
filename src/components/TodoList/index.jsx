import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';

export default function TodoList() {
	const dispatch = useDispatch();
	const { todoList } = useSelector(state => state.todo);

	useEffect(() => {
		dispatch({ type: 'todo/TODO_LIST_REQUEST' });
	}, []);

	return (
		<ul>
			{todoList &&
				todoList.map(({ id, title, status }) => (
					<Todo key={id} title={title} status />
				))}
		</ul>
	);
}

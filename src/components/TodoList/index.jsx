import Todo from '../Todo';

const DUMMY_TODO_LIST = [
	{
		userId: 1,
		id: 1,
		title: 'delectus aut autem',
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: 'quis ut nam facilis et officia qui',
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: 'fugiat veniam minus',
		completed: false,
	},
	{
		userId: 1,
		id: 4,
		title: 'et porro tempora',
		completed: true,
	},
];

export default function TodoList() {
	const todoList = DUMMY_TODO_LIST.map(({ id, title, status }) => (
		<Todo key={id} title={title} status />
	));

	return <ul>{todoList}</ul>;
}

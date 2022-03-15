export default function Todo({ id, title }) {
	return (
		<li>
			{title} <button data-id={id}>삭제</button>
		</li>
	);
}

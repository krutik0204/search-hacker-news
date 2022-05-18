function Comment({ comment }) {
	function dateFormat(timestamp) {
		const date = new Date(timestamp);
		return `${date.getDate()}/${
			date.getMonth() + 1
		}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}

	const nestedComments = (comment.children || []).map((comment) => {
		return <Comment key={comment.id} comment={comment} type="child" />;
	});

	return (
		<div className="ml-4">
			<div className="p-4 my-2 bg-gray-200">
				<div className="flex text-bold text-gray-500">
					<span>{comment.author}</span>
					<span>on {dateFormat(comment.created_at_i)}</span>
				</div>
				<span dangerouslySetInnerHTML={{ __html: comment.text }} />
			</div>
			{nestedComments}
		</div>
	);
}

export default Comment;
import Comment from "./Comment";

function Comments({ comments }) {
	return (
		<>
			{comments.length &&
				comments.map(function (comment,index) {
					return (
						<div>
							<Comment comment={comment} key={index} />
						</div>
					);
				})}
		</>
	);
}

export default Comments;
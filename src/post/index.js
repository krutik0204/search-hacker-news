import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryGetPostDetails } from "../api";

function PostDetails() {
	const [postDetails, setPostDetails] = useState(null);
	let { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			if (id) {
				const result = await queryGetPostDetails(id);
				setPostDetails(result);
			}
		}
		fetchData();
	}, [id]);

	function dateFormat(timestamp) {
		const date = new Date(timestamp);
		return `${date.getDate()}/${
			date.getMonth() + 1
		}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}

	return (
		<div>
			{postDetails ? (
				<>
					<div className="my-2 p-2">
						<div className="text-red-500">{postDetails.title}</div>
						<div className="flex">
							<span className="mr-2">{postDetails.points} points</span>
						</div>
						<h3 className="mt-4 font-bold">Comments</h3>
						{postDetails.children.map(function (comment) {
							return (
								<div className="p-4 my-2 bg-gray-200">
									<div className="flex text-bold text-gray-500">
										<span>{comment.author}</span>
										<span>on {dateFormat(comment.created_at_i)}</span>

										{/* {JSON.stringify(comment)} */}
									</div>
									<span dangerouslySetInnerHTML={{ __html: comment.text }} />
								</div>
							);
						})}
					</div>
					{/* <div>{JSON.stringify(postDetails)}</div> */}
				</>
			) : (
				<div>...Loading</div>
			)}
		</div>
	);
}

export default PostDetails;

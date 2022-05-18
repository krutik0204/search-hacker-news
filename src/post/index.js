import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryGetPostDetails } from "../api";
import Comments from "./Comments";

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
            <Comments comments={postDetails.children} />
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

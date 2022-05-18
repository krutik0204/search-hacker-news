import { useState } from "react";
import { Link } from "react-router-dom";
import { queryAlgoliaAPI } from "./api";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function Home() {
	const [result, setResult] = useState([]);

	async function getResult(query) {
		const { hits } = await queryAlgoliaAPI(query);
		console.log("hits", hits);
		setResult([...hits]);
	}
	const clearInput = () => {
		setResult([]);
	  };
	function onSearchInputChange(event) {
		console.log("onSearchInputChange", event.target.value);
		getResult(event.target.value);
	}

	return (
    <div className="h-screen">
      <div className="p-8 bg-indigo-500">
        <input
          type="text"
          placeholder="Search hacker post"
          className="p-4 text-blue-500 bg-gray-300 border-none focus:border-none h-12 w-full"
          onChange={(event) => onSearchInputChange(event)}
        />
        <div className="searchIcon">
          {result.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      <div className="p-8">
        <h3>Results: {result.length}</h3>
        {result.map(function (data) {
          return (
            data.title && (
              <Link to={`/${data.objectID}`}>
                <div className="my-2 bg-red-200 p-2">
                  <div className="flex">
                    <div className="text-red-500">{data.title}</div>
                    {data.url && (
                      <div className="ml-2 text-gray-500">({data.url})</div>
                    )}
                  </div>
                  <div className="flex">
                    <span className="mr-2">{data.points} points</span>
                    <span className="ml-2">{data.num_comments} comments</span>
                  </div>
                  {/* <div>{JSON.stringify(data)}</div> */}
                </div>
              </Link>
            )
          );
        })}
        <div></div>
      </div>
    </div>
  );
}
export default Home;

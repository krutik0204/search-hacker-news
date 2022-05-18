import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { queryAlgoliaAPI } from "./api";

function Home() {
	const [result, setResult] = useState([]);

	const [searchField, setSearchField] = useState("");
	const timeout = useRef();

	useEffect(() => {
		clearTimeout(timeout.current);
		timeout.current = setTimeout(function () {
			if(searchField !== "") {
				getResult(searchField);
			}
			else{
				setResult([])
			}
		}, 800);
	}, [searchField]);

	async function getResult(query) {
		const { hits } = await queryAlgoliaAPI(query);
		setResult([...hits]);
	}

	function onSearchInputChange(event) {
		setSearchField(event.target.value);
	}

	return (
    <div className="h-screen">
      <div className="p-8 bg-indigo-500">
        <input
          type="text"
		  value={searchField}
          placeholder="Search hacker post"
          className="p-4 text-blue-500 bg-gray-300 border-none focus:border-none h-12 w-full"
          onChange={(event) => onSearchInputChange(event)}
        />
     
      </div>
      <div className="p-8">
        <h3>Results: {result.length}</h3>
        {result.map(function (data,index) {
          return (
            data.title && (
              <Link to={`/${data.objectID}`} key={index}>
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

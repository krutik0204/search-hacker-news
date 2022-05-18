import { useState } from "react";
import { Link } from "react-router-dom";
import { queryAlgoliaAPI } from "./api";
import { SearchIcon } from '@heroicons/react/solid'

<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
  <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
</svg>



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
            <SearchIcon  className="h-5 w-5"/>
          ) : (
            <span id="clearBtn" onClick={clearInput} >x</span>
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

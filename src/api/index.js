const axios = require("axios").default;

export const queryAlgoliaAPI = async function (query) {
	const response = await axios.get(
		`http://hn.algolia.com/api/v1/search?query=${query}`
	);
	return response.data;
};

export const queryGetPostDetails = async function (objectID) {
	const response = await axios.get(
		`http://hn.algolia.com/api/v1/items/${objectID}`
	);
	return response.data;
};

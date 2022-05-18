# Search Hacker News
These app is just a frontend work done using React.js, tailwindCss, and material-ui components. The home page displays a search bar, which allows you to search news and displays the data according to the search result. The data is fetched from an api which has details of various news articles and also the link to the source is provided upon clicking the news article from the search drop down menu.

After clicking on title of the news article, it directs you to anothert page which shows information regarding the title, points and the comments according to the reviews given by different users.

# Getting Started with Search Hacker News

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Search-Hacker-News application functionality:
  1) Created the home page, which contains the search bar and it fetches the data from the api.
  2) Used debounce function to stop unecessary api call when the result data is being fetched.
  3) Added a list and tailwindCss to format the data and display it accordingly when a search is created.
  4) Used axios to connect the search result with the api.
  5) Used react-router dom to store the search result and filter the data required according to the user.
  
  Home Page:
   ![Screenshot from 2022-05-19 02-37-06](https://user-images.githubusercontent.com/72077012/169156870-e4fd1cae-6f4b-4c61-b713-3e370b471912.png)
   
   Post Detail Page:
   ![Screenshot from 2022-05-19 02-42-45](https://user-images.githubusercontent.com/72077012/169156928-9ad95f3d-cca1-43aa-bac8-7e258946b36c.png)


  
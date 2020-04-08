## Mastermind game
A React-Redux project simulates the Mastermind game guesses a secret combination by successive attempts.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live demo on Heroku here --> [https://gianlucabaldin-mastermind.herokuapp.com](https://gianlucabaldin-mastermind.herokuapp.com)

## Tecnologies / Libraries etc
- NodeJS --> environment
- Create React App --> project starting point
- ReactJS / JS ES6 --> programming language
- Redux --> app state management
- React-Bootstrap --> (CSS) styling

## Cypress test E2E

Test are written with Cypress --> [http://cypress.io]

In order to run the test suite make sure your local server is un and running, then in another shell type

- "npm run cypress:open" --> opens the Cypress Test Runner and runs the test headed (in browser)
- "npm run cypress:headless" --> run in headless mode with report and a final .mp4 video inside \cypress\video folder

Test list:

- Should enter the app
- Should start a new game
- Shouldn't insert chars as input
- Should insert an attempt whose numbers are in range [1-9]
- Shouldn't insert number out of range as input
- Shouldn't insert number out of range as input
- Shouldn't insert repeated value as input
- Should abort and show a popup
- Should guess the combination at first attempt

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## TODO

- manage secret trial length / verify all stands dynamically (render jsx, algorithms, etc)
- Heroku deploy ?
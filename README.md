## How to install and demo on your computer

1. `cd` to the directory with the project files.
1. `npm install`
1. `npm start`

If you want to run this project locally on your machine, `npm install` (or `sudo npm install`) may fail to execute the post-install script in `package.json` which copies our own version of `chess.js` into the `chess.js` library folder in `node_modules` (using the `cp` command). (For the purposes of putting all our code in one repo, we did not put our `chess.js` module in a separate GitHub repo, and this was the solution we chose).

After `npm install`, check whether you get a warning like

![image](https://user-images.githubusercontent.com/43935729/68522062-3f05df00-0275-11ea-8245-c0244532b827.png)

Then it is imperative that you copy `chess.js` to `node_modules/chess.js` yourself. Try `sudo npm run postinstall` on Linux. If that doesn't work for some reason, you can try to `npm install` again with the `--unsafe-perm` flag (`npm install --unsafe-perm`). Alternatively (e.g., if you're on Windows and there is no `cp` command), you can manually copy `chess.js` to the `node_modules/chess.js` folder.


If you encounter a puppeteer installation error after `npm install`, see https://github.com/puppeteer/puppeteer/issues/2173#issuecomment-399745457.



## How to test

1. `npm test` (`npm test -- <file_path>` if you want to run a particular test file)

The tests are located in `src/test`.

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

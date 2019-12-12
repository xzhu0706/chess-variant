Live Demo: http://chess-variant-20191210113159-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/

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

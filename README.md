Live Demo: http://chess-variant-20191210113159-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/

## How to install and demo on your computer

1. Open an issue or send an email to xzhu000@citymail.cuny.edu stating you would like to receive an **aws-exports.js** file to run the project locally. The file should be placed under the `src` folder.
1. Clone the project on your computer
1. `cd` to the directory with the project files.
1. `npm install`
1. `npm start`

If you want to run this project locally on your machine, `npm install` (or `sudo npm install`) may fail to execute the post-install script in `package.json` which copies our own version of `chess.js` into the `chess.js` library folder in `node_modules` (using the `cp` command). (We did this because we wanted to keep all our source code in one repo). After `npm install`, check whether you get a warning like `postinstall: cannot run in wd mvp@0.1.0 cp src/chess.js node modules/chess.js`. If you do get this warning, then it is imperative that you copy `src/chess.js` to `node_modules/chess.js` yourself&mdash;otherwise you'd be using the original `chess.js` library instead of our modified code. The simplest way to do this is to install it from our (up-to-date) fork on Github via `npm install github:seyson/chess.js`.

## How to test

General note: If you encountered a puppeteer installation error after `npm install` (as one of us did), see https://github.com/puppeteer/puppeteer/issues/2173#issuecomment-399745457.

1. `npm test` (`npm test -- <file_path>` if you want to run a particular test file)
1. `npm test -- --coverage` if you want to see the test coverage.

The tests are located in `src/test`.

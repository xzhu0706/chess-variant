import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const puppeteer = require('puppeteer')

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('base e2e test', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: 80
  });
  const page = await browser.newPage();
  await page.goto(
    'http://chess-variant-20191104002115-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/'
  );
});
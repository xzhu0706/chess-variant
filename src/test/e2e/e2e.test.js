const puppeteer = require('puppeteer');


describe('App Level Tests', () => {
  test('base e2e test', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
    });
    const page = await browser.newPage();
    await page.goto(
      'http://chess-variant-20191104002115-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/'
      // 'http://localhost:3000/'
    );

    await page.click('#btncreategame');
    await page.select('#select-variant', 'Antichess');
    await page.click('#btnwhite');
    await browser.close();
  });
});
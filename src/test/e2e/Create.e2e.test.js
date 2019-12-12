const puppeteer = require('puppeteer');

describe('Variant creation on /create page', () => {
  test('User can successfully save a variant', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1000,
        height: 1000,
      },
      userAgent: '',
    });

    const puppeteerUsername = 'username';
    const puppeteerPassword = 'password';

    await page.goto(
      'http://chess-variant-20191210113159-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/create',
    );

    // login first
    await page.click('button[data-testid="login-button"]');
    await page.click('input[name="username"]');
    await page.type('input[name="username"]', puppeteerUsername);
    await page.click('input[name="password"]');
    await page.type('input[name="password"]', puppeteerPassword);
    await page.click('button[data-test="sign-in-sign-in-button"]');

    // save variant
    await page.waitForSelector('form'); // necessary or not?
    await page.click('input[placeholder="Your variant name"]');
    await page.type('input[placeholder="Your variant name"]', 'my puppeteer variant');
    await page.click('Button[type="submit"]');

    await browser.close();
  }, 20000);
});

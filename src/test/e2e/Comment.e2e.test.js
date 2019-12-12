const puppeteer = require('puppeteer');

describe('Commenting on variant pages (/pages/<variantID>)', () => {
  test('Post a comment on a variant page', async () => {
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
      'http://chess-variant-20191210113159-hostingbucket-develop.s3-website-us-east-1.amazonaws.com/pages/d1b8ab83-a2f2-448b-8955-06d8ef9afc43',
    );

    // login first
    await page.click('button[data-testid="login-button"]');
    await page.click('input[name="username"]');
    await page.type('input[name="username"]', puppeteerUsername);
    await page.click('input[name="password"]');
    await page.type('input[name="password"]', puppeteerPassword);
    await page.click('button[data-test="sign-in-sign-in-button"]');

    await page.click('.comment-form textarea');
    await page.type('.comment-form textarea', 'puppeteer comment');
    await page.click('.comment-button');

    await browser.close();
  }, 20000);
});

const puppeteer = require('puppeteer');

describe('Commenting on variant pages (/pages/<variantID>)', () => {
  test('Post a comment on a variant page', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 25,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1000,
        height: 1000
      },
      userAgent: ''
    });

    const puppeteerUsername = 'username';
    const puppeteerPassword = 'password';

    await page.goto(
      'http://localhost:3000/pages/faea414b-1c91-49d8-ae5e-7b7fc1aae213' // replace with live url
    );

    // login first
    await page.click('button[data-testid="login-button"]')
    await page.click('input[name="username"]')
    await page.type('input[name="username"]', puppeteerUsername)
    await page.click('input[name="password"]')
    await page.type('input[name="password"]', puppeteerPassword)
    await page.click('button[data-test="sign-in-sign-in-button"]');

    await page.click('.comment-form textarea');
    await page.type('.comment-form textarea', 'puppeteer comment');
    await page.click('.comment-button');

    await browser.close();
  }, 9999);
});
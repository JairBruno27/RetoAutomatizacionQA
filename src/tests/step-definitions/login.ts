import { Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "playwright/test";
import { LoginPage } from "../step-definitions/LoginPage";

let browser: Browser;
let page: Page;

Given('I am on the Sauce Demo login page', async function () {
  browser = await chromium.launch({headless: false, channel: "chrome"});
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I enter valid credentials', async function () {
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
});

When('I enter invalid credentials', async function () {
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
});

When('I click on the login button', async function () {
  await page.click('#login-button');
});

Then('I should be redirected to the products page', async function () {
  const title = await page.title();
  if (title !== 'Swag Labs') throw new Error('Login failed');
});

Then('I should see an error message', async function () {
  const errorMessage = await page.isVisible('[data-test="error"]');
  if (!errorMessage) throw new Error('Error message not displayed');
});

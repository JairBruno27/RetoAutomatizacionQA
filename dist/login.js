"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
let browser;
let page;
(0, cucumber_1.Given)('A web browser is at the saucelabs login page', async function () {
    // Add this to the launch options to run the tests in headless mode: {headless: false}
    browser = await test_1.chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
});
(0, cucumber_1.When)('A user enters the username {string}, the password {string}, and clicks on the login button', async function (username, password) {
    await page.fill('input[data-test="username"]', username);
    await page.fill('input[data-test="password"]', password);
    await page.click('input[data-test="login-button"]');
});
(0, cucumber_1.Then)('the url will contains the inventory subdirectory', async function () {
    await (0, test_1.expect)(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await browser.close();
});

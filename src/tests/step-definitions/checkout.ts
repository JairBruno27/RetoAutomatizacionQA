import { Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "playwright/test";

let browser: Browser;
let page: Page;

Given('I have products in my cart', async function () {
  browser = await chromium.launch({headless: false, channel: "chrome"});
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('.inventory_item:nth-child(1) .btn_inventory');
  await page.click('.shopping_cart_link');
});

When('I proceed to checkout', async function () {
  await page.click('.checkout_button');
});

When('I fill in the shipping details', async function () {
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '90210');
  await page.click('.btn_primary');
});

When('I complete the purchase', async function () {
  await page.click('.btn_action');
});

Then('I should see the order confirmation page', async function () {
  const confirmationMessage = await page.isVisible('.complete-header');
  if (!confirmationMessage) throw new Error('Order confirmation not displayed');
});

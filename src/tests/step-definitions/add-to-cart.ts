import { Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "playwright/test";

let browser: Browser;
let page: Page;

Given('I am logged in as a standard user', async function () {
  browser = await chromium.launch({headless: false, channel: "chrome"});
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

When('I add multiple products to the cart', async function () {
    const productsToAdd = [1, 2, 3]; // Selecciona los productos (1° = 1, 2° = 2, etc.)
  
    for (const index of productsToAdd) {
      await page.click(`.inventory_item:nth-child(${index}) .btn_inventory`);
    }
});

Then('I should see the product in the cart', async function () {
  const cartCount = await page.textContent('.shopping_cart_badge');
  const expectedCount = '3';
  if (cartCount !== expectedCount) throw new Error(`Expected ${expectedCount} products, but found ${cartCount}`);
});

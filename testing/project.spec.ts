import { test, expect } from '@playwright/test';

const URL = "https://www.saucedemo.com/";
const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

/*
TEST 1
Verify Login
*/
test('Login Test', async ({ page }) => {

  await page.goto(URL);

  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);

  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);

});


/*
TEST 2
Verify Products Page
*/
test('Verify Product List', async ({ page }) => {

  await page.goto(URL);

  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#login-button');

  const products = page.locator('.inventory_item');

  await expect(products).toHaveCount(6);

});


/*
TEST 3
Add Product To Cart
*/
test('Add Product To Cart', async ({ page }) => {

  await page.goto(URL);

  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toBeVisible();

});


/*
TEST 4
Remove Product From Cart
*/
test('Remove Product From Cart', async ({ page }) => {

  await page.goto(URL);

  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await page.click('#remove-sauce-labs-backpack');

  await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();

});


/*
TEST 5
Logout Test
*/
test('Logout Test', async ({ page }) => {

  await page.goto(URL);

  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await expect(page).toHaveURL(URL);

});
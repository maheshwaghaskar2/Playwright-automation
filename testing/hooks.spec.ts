import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E Flow with Hooks', () => {

    // Runs once before all tests (NO page here)
    test.beforeAll(async () => {
        console.log("🚀 Test Suite Started");
    });

    // Runs before each test
    test.beforeEach(async ({ page }) => {
        console.log("➡️ Starting a test");

        await page.goto('https://www.saucedemo.com/');

        // Login
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // Verify login success
        await expect(page.locator('.inventory_list')).toBeVisible();
    });

    // Test 1
    test('Add product to cart', async ({ page }) => {
        await page.click('.inventory_item:first-child button');
        await page.click('.shopping_cart_link');

        await expect(page.locator('.cart_item')).toBeVisible();
    });

    // Test 2
    test('Remove product from cart', async ({ page }) => {
        await page.click('.inventory_item:first-child button');
        await page.click('.shopping_cart_link');

        await page.click('button:has-text("Remove")');

        await expect(page.locator('.cart_item')).toHaveCount(0);
    });

    // Test 3
    test('Logout functionality', async ({ page }) => {
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');

        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    // Runs after each test
    test.afterEach(async ({ page }) => {
        console.log("✅ Test Finished");

        // Example: take screenshot after each test
        await page.screenshot({ path: `screenshots/${Date.now()}.png` });
    });

    // Runs once after all tests
    test.afterAll(async () => {
        console.log("🏁 Test Suite Finished");
    });

});
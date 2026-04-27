import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bajajfinservhealth.in/');
  await expect(page.getByTestId('marketplace-card')).toContainText('Wellness Store');
  await page.getByTestId('marketplace-card').click();
  await page.locator('div:nth-child(6) > .css-d9qr8w > img').click();
  await expect(page.locator('#marketplace-page-wrapper')).toContainText('Diabetes Care Program');
  await page.getByTestId('mxRCXNdRXvwz1N4n1s9Qc').click();
  await page.locator('div').filter({ hasText: 'Login or Sign UpWe will send' }).nth(1).click();
  await page.locator('div').filter({ hasText: 'Login or Sign UpWe will send' }).nth(1).click();
});
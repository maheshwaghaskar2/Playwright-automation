import { expect, test } from "@playwright/test";

test("Assertion methods",async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    await expect(page).toHaveTitle('Account Login')
     await page.waitForTimeout(3000)

    await expect(await page.getByRole('textbox',{name: 'E-Mail Address'})).toBeVisible();
    await page.getByRole('textbox',{name: 'E-Mail Address'}).fill('Master')
    await expect(await page.getByRole('textbox',{name: 'E-Mail Address'})).toHaveValue("Master")

    const heading = page.locator('h2').nth(1);

  await expect(heading).toHaveText('Returning Customer');

  await expect(page.getByRole('button',{name:'Login'})).toBeEnabled()

  await page.getByTitle('naveenopencart').first().click()
  await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

  await page.getByRole('checkbox').check()
  await expect(await page.getByRole('checkbox')).toBeChecked()

    await page.waitForTimeout(2000)

})
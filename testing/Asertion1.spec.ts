import { expect,test } from "@playwright/test";

test("Assertion_methods", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    await expect(page).toHaveTitle('Account Login')
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(await page.getByText('I am a returning customer')).toContainText('I am a returning ')
    
    const email=page.getByRole("textbox",{name:'E-Mail Address'});
    await expect(email).toBeVisible()

    const password= page.getByPlaceholder('Password')
    await expect(password).toBeVisible();

    const login= await page.getByRole('button',{name:'Login'})
   // await expect(login).toBeVisible()
    await expect(login).toBeEnabled

    await email.fill('Mahesh')
    await password.fill('bhau')
    await login.click()
    
    await expect(page.locator("div[class='alert alert-danger alert-dismissible']")).toHaveText('Warning: No match for E-Mail Address and/or Password.');
    //await expect(page.getByText(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')).toHaveText(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')
    await page.waitForTimeout(3000)

})
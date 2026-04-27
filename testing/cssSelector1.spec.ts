import test from "@playwright/test";

test("Different Type of Selector",async({page})=>{

    await page.goto('https://flights.qedgetech.com/')
    await page.waitForTimeout(2000)

    //by using ID
    //await page.locator("input[type='email']").fill('Admin')

    //Parent to child
    //await page.locator(".login-box-body input[name='email']").fill("admin")
    //await page.locator("div[class='login-box-body'] input[type='password']").fill('WrongPassword')

    //by text 
    //await page.locator("text='Sign In'").click()

    //by partial value 
    //await page.locator("[placeholder^='Email']").fill('njjsndjsdn')
    //await page.locator("[placeholder*='mai']").fill('njjsndjsdn')
    await page.locator("[placeholder$='l ID']").fill('njjsndjsdn')
    await page.waitForTimeout(3000)

})
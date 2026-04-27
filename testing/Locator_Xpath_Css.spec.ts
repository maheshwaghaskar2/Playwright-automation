import { Expect,test } from "@playwright/test";

test("Login with id ",async ({page})=>{

    await page.goto('http://orangehrm.qedgetech.com/')

    await page.locator("input#txtUsername").fill("Admin")
    await page.locator("#txtPassword").fill("Qedge123!@#")
    await page.locator("[id='btnLogin']").click()

    await page.waitForTimeout(2000)

})


test("Login with class ", async({page})=>{

    await page.goto('http://webapp.qedgetech.com/')

    await page.locator("[class='form-control ewControl']").first().clear()
    await page.waitForTimeout(2000)
    await page.locator("[class='form-control ewControl']").first().fill('admin')

    await page.locator("[class='form-control ewControl']").nth(1).clear()
    await page.locator("[class='form-control ewControl']").nth(1).fill('master')

    await page.waitForTimeout(2000)

    await page.locator("[class='btn btn-primary ewButton']").first().click({clickCount:1});

    await page.waitForTimeout(2000)   



})
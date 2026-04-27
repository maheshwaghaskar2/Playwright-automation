import { expect, test } from "@playwright/test";

test("Login ",async({page})=>{

    await page.goto('http://webapp.qedgetech.com/register.php')

    //await page.locator("#btnsubmit").click()
   //await page.locator("button#btnsubmit").click()
    await page.locator("[id='btnsubmit']").click()


   // await page.locator(".form-control").nth(0).fill('admin')
   // await page.locator("input.form-control").nth(0).fill('admin')
    //await page.locator("[class='form-control']").nth(0).fill('admin')


    await page.locator("input[name='x_Password']").fill('master') // any selector

    await page.locator(".modal-body #c_Password").fill('mast')  // Parent to child

    await page.locator("text='First Name'").fill("Mahesh")// by Text

    await page.locator("[class^='form']").nth(10).fill("Waghaskar") // by start with

    await page.locator("[class*='rm-contr']").nth(5).fill('abc@gmail.com') //contains

    await page.locator("[class$='ewButton']").first().click() //end with

    // By using x path

    await page.locator("//button[@class='ajs-button btn btn-primary']").click()

    await page.waitForTimeout(4000)


    

})
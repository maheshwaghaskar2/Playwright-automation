import { expect, test  } from "@playwright/test";

test("Using Built in locators", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    // getByRole

    // await page.getByRole('textbox',{name : 'E-Mail Address'}).fill('Admin');
    // await page.getByRole('textbox', {name:'Password'}).fill("Master")
    // await page.getByRole('button',{name:"Login"}).click()
    // await page.getByRole('link',{name:'Shopping Cart'}).click()
    // await page.getByRole('link',{name:'Components'}).click()
    // await page.getByRole('link',{name:'Monitors (2)'}).click()
    
    //getByText
    
    // await page.getByText('Desktops').first().click()
    // await page.getByRole('link',{name:'Mac (1)'}).click()
    // await page.getByRole('link',{name:'iMac'}).nth(1).click()
    // await page.getByText('Add to Cart').nth(0).click()

    //getByLabel

    // await page.getByLabel('E-Mail Address').fill('Admin')
    // await page.getByLabel('Password').fill('Master')
    // await page.getByRole('button',{name:'Login'}).click()

    //getByPlaceholder

    // await page.getByPlaceholder('E-Mail Address').fill('admin')
    // await page.getByPlaceholder('Password').fill("Master")

    // getByAltText
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
    await page.getByAltText('Canon EOS 5D').click()

   //getByTitle

  //await page.getByTitle('onclick').nth(3).click()
    
    await page.waitForTimeout(4000)

})
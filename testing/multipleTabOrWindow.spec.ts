import test, { expect } from "@playwright/test";

test("multiple tab handelling",async({page})=>{

    await page.goto('https://workspace.google.com/intl/en_in/gmail/')
    await page.waitForTimeout(2000)

    const BusinessPagePromise =  page.waitForEvent("popup")
    await page.getByRole('link', { name: 'Open the Help page in a new tab' }).first().click()
    const BusinessPage= await BusinessPagePromise

    await page.waitForTimeout(2000)
    console.log("The title of the page is : "+ await BusinessPage.title());
    console.log("The url of the current page is : "+await BusinessPage.url());
    
    await expect(BusinessPage.getByText('Welcome Google Workspace admin').first()).toBeVisible()
    //await expect(await BusinessPage.title()).
    await BusinessPage.close()

    await page.waitForTimeout(3000)

//handelling privacy page

    const PrivacyPagePromise= page.waitForEvent("popup")
    await page.getByRole('link',{name:'Open the Privacy page in a new tab'}).click()
    const PrivacyPage= await PrivacyPagePromise

    await page.waitForTimeout(3000)
    await PrivacyPage.getByRole('link',{name:'FAQ'}).first().click()
    await expect(PrivacyPage.getByText('How does Google protect my privacy and keep my information secure?')).toBeVisible()
    console.log("The privacy page title is : "+await PrivacyPage.title());
    
    await PrivacyPage.close()
    await page.waitForTimeout(3000)
})
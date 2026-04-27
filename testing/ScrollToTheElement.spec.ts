import test from "@playwright/test";

test("Scroll to the element",async({page})=>{

    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)

    await page.getByRole('link',{name:'Instagram'}).last().scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    await page.getByRole('link',{name:'Instagram'}).last().click()
    await page.waitForTimeout(3000)
    await page.goBack()

    await page.waitForTimeout(3000)
    await page.locator('#nav-cart-text-container').click()
    await page.waitForTimeout(3000)

})
import{expect,test} from "@playwright/test"

test("Screenshot of all page", async({page})=>{

    await page.goto('http://orangehrm.qedgetech.com/')
    await page.waitForTimeout(2000)

    await page.screenshot({path : './Screenshot/homepage.png'})

    await page.waitForTimeout(2000)

})

test("Screenshot of particular element", async({page})=>{

    await page.goto('http://orangehrm.qedgetech.com/')
    await page.waitForTimeout(2000)

    const username=page.locator('#txtUsername')
    await username.fill("Admin")
    await username.screenshot({path:'./Screenshot/username.png'})

    const password=page.locator('#txtPassword')
    await password.fill('302300932')
    await password.screenshot({path:'./Screenshot/password.png'})

    await page.waitForTimeout(2000)
})
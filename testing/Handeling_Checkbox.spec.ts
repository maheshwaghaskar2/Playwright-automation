import { expect,test } from "@playwright/test";

test("Handelling textbox",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const sunday=  page.getByRole('checkbox',{name:'Sunday'})
    const monday= page.getByRole('checkbox',{name:'Monday'})

    await sunday.check()
    await expect(sunday).toBeChecked()

    await monday.click()
    await expect(monday).toBeChecked()

    await page.waitForTimeout(2000)

    await monday.uncheck()
    await expect(monday).not.toBeChecked()

    await page.waitForTimeout(3000)
})

//get collection of all checkboxes and print each check box name
test("Counting checkboxes",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(3000)
    let allcheckboxes = await page.locator("(//div[@class='form-group'])[4]//div")
  let countcheckbox = await allcheckboxes.count()
for(let i=0;i<countcheckbox;i++)
{
    const eachcheckbox = await allcheckboxes.nth(i)
    await page.waitForTimeout(2000)
    await eachcheckbox.getByRole("checkbox").check()
    console.log( await eachcheckbox.textContent())

}

})





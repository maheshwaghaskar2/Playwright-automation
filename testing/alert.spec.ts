import test from "@playwright/test";

test('Handelling alert',async({page})=>{

    await page.goto('https://jqueryui.com/checkboxradio/')
    await page.waitForTimeout(2000)

    const frame= page.frameLocator('.demo-frame')

    await frame.getByText('2 Star').check();

    const frameCount= await page.locator('iframe').count()
    console.log(`The frame count in the page is ${frameCount}`);

    const checkCheckbox= await frame.getByText('2 Star').isChecked();
    console.log(checkCheckbox);
    
    await page.waitForTimeout(2000)
})

test("Counting Checkbox ",async({page})=>{

    await page.goto('https://jqueryui.com/checkboxradio/')
    await page.waitForTimeout(2000)
    const frame= page.frameLocator(".demo-frame")

    const allCheckBox= frame.locator("//label[@class='ui-checkboxradio-label ui-corner-all ui-button ui-widget']")
    const checkboxCount= await allCheckBox.count()
    console.log(`The no of checkbox is ${checkboxCount}`);

    for(let i=0;i<checkboxCount;i++)
    {
        const eachCheckbox= await allCheckBox.nth(i).textContent()
        console.log(`The name of the checkbox is ${eachCheckbox}`);
        
    }

})
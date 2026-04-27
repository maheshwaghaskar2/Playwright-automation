import { expect, test  } from "@playwright/test";

test("Dropdown or listbox",async({page})=>{

    await page.goto('https://practice.expandtesting.com/dropdown')

    await page.waitForTimeout(2000)

    await page.locator("#country").selectOption('American Samoa')
    await expect(page.locator("#country")).toHaveValue('American Samoa')
    await page.waitForTimeout(2000)

    await page.locator("#country").selectOption('MV')
    await page.waitForTimeout(2000)

    await page.locator("#country").selectOption({index:15})






    await page.waitForTimeout(2000)
})

test("dropdown- ebay ",async({page})=>{

    await page.goto("https://www.ebay.com/")
    await page.waitForTimeout(2000)
    
    const dropdown= page.locator('#gh-cat')    

    const allOptions= await dropdown.all();
    const countOption= await dropdown.count()
    console.log(`The no of the all Option is ${countOption}`);
    
    for(let element of allOptions)
    {
        
        const text =await element.allTextContents()
        console.log(text);
        
    }

})

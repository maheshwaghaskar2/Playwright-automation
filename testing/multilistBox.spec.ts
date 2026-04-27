import {expect,test} from "@playwright/test"

test("Handelling List box",async({page})=>{

    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(2000)

    const dropdown= page.locator(".css-19bb58m").first().click()

    await page.locator("#react-select-2-option-0-1").click()
    await page.waitForTimeout(2000)

    page.locator(".css-19bb58m").first().click()
    await page.locator("#react-select-2-option-1-0").click()
    await page.waitForTimeout(2000)

    page.locator(".css-19bb58m").first().click()
    await page.locator("#react-select-2-option-2").click()
    await page.waitForTimeout(2000)


})

test("Handling multiselection non select listbox",async({page})=>{

    await page.goto('https://demoqa.com/select-menu')

    await page.locator(".css-19bb58m").last().click();
    await page.waitForTimeout(2000)

    await page.locator('#react-select-4-option-2').click()
    await page.waitForTimeout(2000)

    await page.locator('#react-select-4-option-0').click()
    await page.waitForTimeout(2000)

    await page.locator('#react-select-4-option-1').click()
    await page.waitForTimeout(2000)

    await page.locator('#react-select-4-option-3').click()
    await page.waitForTimeout(2000)

})

test("Handling MultiListbox with select tag",async({page})=>{

    await page.goto('file:///C:/Users/admin/Downloads/MultiListboxHtmlpage_lyst1775746638975.html')
    await page.waitForTimeout(2000)

    const multoListBox= page.locator("select[name='multiSelection']")

    await multoListBox.selectOption(['Yellow','purple'])
    await page.waitForTimeout(2000)
    
    await multoListBox.selectOption([{label:'light green'},{label:'Blue'}])
    await page.waitForTimeout(2000)

    await multoListBox.selectOption([{value:'red'},{value:'white'}])
    await page.waitForTimeout(2000)



})

test("Counting options in multilistbox",async({page})=>{
    await page.goto('file:///C:/Users/admin/Downloads/MultiListboxHtmlpage_lyst1775746638975.html')
    //store listbox into one varibale
    const multilistbox = page.locator("[name='multiSelection']")
    //get all option from listbox
    const all_Options = multilistbox.locator('option')
    //count all option 
    const count_option =await all_Options.count()
    console.log(`No of options in listbox ${count_option}`)
    for(let i=0;i<count_option;i++)
    {
        const eachoption_name =  await all_Options.nth(i).textContent()
        console.log(`Each Option name ${eachoption_name}`)

    }
})

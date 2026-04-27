import test, { expect } from "@playwright/test";

test("Uploading the files ",async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(2000)
    //const filepath =Path.join

    await page.locator('#filesToUpload').first().setInputFiles("./TestData/browser_nad_page_lyst1774537075244.docx")
    await expect(page.locator('#fileList')).toContainText('browser_nad_page_lyst1774537075244.docx')

    await page.waitForTimeout(2000)


})

test('Uploads multiple files',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(2000)

    await page.locator('#filesToUpload').first().setInputFiles(["./TestData/browser_nad_page_lyst1774537075244.docx","./TestData/Playwright__architecture_notes_lyst1774492192761 (1).docx"])

    await page.waitForTimeout(2000)

})

test('Uploads multiple files by folder',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(2000)
   // const directoryPath = path.join(__dirname,'../TestData/')
    //console.log(directoryPath);

    await page.waitForTimeout(2000)

})

test('Calender Handelling ',async({page})=>{

    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')
    await page.waitForTimeout(2000)

    await page.locator('.ui-datepicker-trigger').click()

    const day="20"
    const month='February'
    const year='2024'

     const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while((await yearPicker.textContent()!=year) || (await monthPicker.textContent()!=month))
    {
        await page.locator("//span[text()='Prev']").click()
    }

    await page.getByText(day, {exact: true}).last().click()

    await expect( page.locator('#sixth_date_picker')).toHaveValue(`02/20/2024`)


    await page.waitForTimeout(2000)

})
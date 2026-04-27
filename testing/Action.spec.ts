import {test, expect} from "@playwright/test"

test("Handelling Doouble click" , async({page})=>{

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.waitForTimeout(2000)

    const DoubleClick= page.getByText('Double-Click Me To See Alert')
    await DoubleClick.hover()
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog =>{

        console.log("Alert type is : "+dialog.type());
        console.log("Alert message is : "+dialog.message());
        await page.waitForTimeout(2000)
        dialog.accept()
        
    })

    //await rightClick.dblclick();
    await DoubleClick.click({clickCount:2})

    await page.waitForTimeout(2000)
})

test("Handelling Right click", async({page})=>{

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.waitForTimeout(2000)

    const rightClick= page.getByText('right click me',{exact:true})

    await rightClick.hover();
    await rightClick.click({button:'right'})
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog=>{

        console.log("The alert type is : "+dialog.type());
        console.log("The Alert Message is : "+dialog.message());
        dialog.accept()
    })

    await page.getByText('Delete',{exact:true}).click()

    await page.waitForTimeout(2000)

})

test('Multiple mouse hovers', async({page})=>{

    await page.goto('')
    await page.waitForTimeout(2000)

    

})
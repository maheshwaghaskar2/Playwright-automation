import test from "@playwright/test";

test("Handling Alert",async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog =>{

        const alertType=dialog.type()
        console.log("Alert type is : ", alertType);
        
        const alertMessage=dialog.message()
        console.log("Alert Message is : "+alertMessage);
        
        await page.waitForTimeout(2000) 

        dialog.accept()

    })

    await page.getByText("Click for JS Alert").click()
    await page.waitForTimeout(2000)

    const text= await page.locator("#result").textContent()
    console.log(text);
    


})

test("Handelling Confirm Alert", async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog=>{

        const alertType=dialog.type()
        console.log("The alert type is : ",alertType);
        
        const alertMessage= dialog.message()
        console.log("The alert message is : ",alertMessage );
        
        await page.waitForTimeout(3000)

        dialog.dismiss()

    })

    await page.getByText("Click for JS Confirm").click()

    console.log(await page.locator("#result").innerText());

})

test("Handelling promt alert ", async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)

        page.on('dialog',async dialog=>{

            const alertType= dialog.type()
            console.log("The Alert Type is : ",alertType);
            
            const alertMessage= dialog.message()
            console.log("The Alert Type is : "+alertMessage);

            await page.waitForTimeout(2000)
            
            dialog.accept("I am learning prompt alert!!!!")

        })
        await page.getByText("Click for JS Prompt").click()

        console.log(await page.locator("#result").textContent());
        

})
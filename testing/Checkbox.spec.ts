import{expect,test} from "@playwright/test";

//script to count all checkboxes and verify checkbox status and print each checkbox name

test("Checkbox operation",async({page})=>{

    await page.goto('file:///C:/Users/admin/Downloads/checkbox_1_lyst1775573536735.html')
    await page.waitForTimeout(2000)

    const  allCheckbox= page.locator("input[type='checkbox']");
    const checkboxCount=await allCheckbox.count()

    console.log("Alll checkobx count is : ",checkboxCount);

    for(let i=0;i<checkboxCount;i++)
    {
        const eachCheckBox= allCheckbox.nth(i)
        console.log(await eachCheckBox.getAttribute("value")," : ",await eachCheckBox.isChecked());
        
    }

})

// Script to validate login

test("Login validate ", async({page})=>{

    await page.goto('http://orangehrm.qedgetech.com/')

    const username= page.locator("input#txtUsername")
    const password = page.locator("input#txtPassword")

    await username.clear()
    await username.fill("Admin")

    await password.clear()
    await password.fill("Qedge123!@#")

    await page.locator("input[id='btnLogin']").click()

    await page.waitForTimeout(3000)

    const Actual= page.url();
    const Expected = "dashboard"
    if(Actual.includes(Expected))
    {
         console.log("valid Credentails  "+ Expected+"     "+Actual+"  "+"Test Pass")
    }
    else
    {
        const error_message= page.locator("#spanMessage")
        console.log(await error_message.textContent());
        
    }


})
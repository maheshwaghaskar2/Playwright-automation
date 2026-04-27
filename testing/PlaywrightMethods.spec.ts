import test from "@playwright/test";

test("Methods",async({page,context})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
   // await page.waitForLoadState('domcontentloaded');

   console.log(await page.url());
   console.log(await page.title());

   // Locator usage
    const email = page.locator('#input-email');
    const password = page.locator('#input-password');
    const loginBtn = page.locator("input[value='Login']");


    // Fill form
    await email.type('test@gmail.com');
    await password.type('12345')

    //keyboard
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")
    //await page.keyboard.press("Esc");
    //await page.goBack();

    //Hover
    await page.hover("a[title='My Account']");


   //const cookies = await context.cookies();
    //console.log(cookies);

    await page.waitForTimeout(3000)
})
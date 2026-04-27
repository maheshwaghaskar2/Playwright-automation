import { expect, test } from "@playwright/test";

test("title and url ",async({page})=>{

    await page.goto("https://tatacliq.com");

    let  title= await page.title();

    let url= await page.url();

    console.log("Title of the Page : ", title)
    console.log("Url of the Page : ", url);

    await page.waitForTimeout(4000)
});

test("textContent , innerText, getAttribute, count", async({page})=>{

   await  page.goto("https://www.google.com/")

    // Get all the link which are stored in the a tag

    const all_links= await page.locator('a');

    const count_links= await all_links.count();

    console.log(count_links);
    
   for(let i=0;i<count_links;i++)
   {
        const each_link= await all_links.nth(i)

        const each_link_text=await each_link.textContent()
        const each_link_innertext= await each_link.textContent()
        const link_url= await each_link.getAttribute("href")
        

         console.log("------------------------------");
         
         console.log(`Link name ${i+1} : ${each_link_text}`);
         //console.log(each_link_innertext);
         console.log(`Link url ${i+1} : ${link_url}`);
         

   
   console.log("--------------******----------------");
         


   }
   






    




    //await page.waitForTimeout(4000)
})
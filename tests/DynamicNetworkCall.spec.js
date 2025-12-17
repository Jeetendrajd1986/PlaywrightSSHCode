const {test,expect} = require('@playwright/test') ;



test("Validate Page s on new window",async function({page})
{

 
         await page.goto("https://freelance-learn-automation.vercel.app/login");

          await page.waitForTimeout(2000);
         await page.locator("//a[normalize-space()='New user? Signup']").click();
    

       // help to find out eleemnts on page so  waitForSelecto() method used else getting 0 output
   
      // await page.waitForLoadState("domcontentloaded")

      

     await page.waitForSelector("//input[@type='checkbox']", { timeout: 5000 })  //Dynamic call handler
       const Count = await page.locator("//input[@type='checkbox']").count()

       console.log("Total checkbox are "+ Count);
       expect(Count).toBe(7);











}     )

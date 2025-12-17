const {test,expect} = require('@playwright/test') ;
const TestData= JSON.parse(JSON.stringify(require('../TestData.json')))


test("Validate Page s on new window",async function({page})
{

 
         await page.goto("https://freelance-learn-automation.vercel.app/login");

          await page.waitForTimeout(2000);
          await page.locator("//input[@id='email1']").fill(TestData.username);
          await page.locator("//input[@id='password1']").fill(TestData.password);
          await page.locator("//button[normalize-space()='Sign in']").click();
          await page.pause();

}  )
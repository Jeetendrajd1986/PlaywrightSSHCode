
const {test,expect} = require('@playwright/test') ;



test("Validate Page s on new window",async function({page})
{

 const context = await page.context();
 //const page1 = await context.newPage();

await page.goto("https://freelance-learn-automation.vercel.app/login");
 
 // Wait for popup and click at the same time
const [newpage] = await Promise.all
( 
    [
    context.waitForEvent('page'),  // first Promise
    page.locator("//div[@class='container-child']//a[4]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')]").click(),
      //Above second promise

     ]

) 

newpage.getByLabel('Email address or phone number', { exact: true }).fill('test@gmail.com');

await newpage.waitForTimeout(5000);
//await page.getByPlaceholder('Enter Email').fill('test@gmail.com'); // move to main page Login
await page.locator("//input[@id='email1']").fill('test@gmail.com');
await page.waitForTimeout(5000);
})

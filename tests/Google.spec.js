const {test,expect} = require('@playwright/test') ;
test("My First test",async function({page})
{

    await page.goto('https://www.google.com/');
   const url= await page.url()

   console.log("Page url is "+ url)

   const title= await page.title()
    console.log("Title is "+ title)
   
   await  expect(title).toBe("Google")


})

const {test,expect} = require('@playwright/test') ;



test("Validate Alerts",async function({page})
{

    // Interact with elements inside the iframe   

    await page.goto("https://demo.automationtesting.in/Frames.html");
// Locate the iframe by its ID or selector //  id="singleframe"
//const frame = page.frameLocator('#SingleFrame').locator("//input[@type='text']");
const frame = page.frameLocator('#singleframe').getByRole('textbox')
await frame.fill('testing');

 await page.locator("//a[normalize-space()='Iframe with in an Iframe']").click();
const MultipleFrames=page.frameLocator('[src*="MultipleFrames.html"]').frameLocator('[src*="SingleFrame.html"]')
  await MultipleFrames.getByRole('textbox').fill('Welcome to nested frames');

const value= await MultipleFrames.getByRole('textbox').inputValue();
  
 expect(value).toEqual('Welcome to nested frames');
 expect(value).toContain('Welcome');
  await console.log("Frames handled successfully " + value);  

});
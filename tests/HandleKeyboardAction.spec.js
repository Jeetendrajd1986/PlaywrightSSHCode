const {test,expect} = require('@playwright/test') ;


test("Validate keyboard action page ",async function({page})
{

await page.goto('https://www.google.com/');

/*  
page.locator("//textarea[@id='APjFqb']").fill("Playwright Automation" )
 await page.keyboard().press("Enter")
await page.keyboard.press('Control+A')
await page.keyboard.press('Backspace')
await page.waitForTimeout(5000)
await expect(page).toHaveURL(/Playwright+Automation/)
*/
page.locator("//textarea[@id='APjFqb']").focus();
    await page.keyboard.type("Playwright Automation")
    
    //await page.keyboard.press('ArrowLeft') 
    await page.keyboard.down('Shift')
    for (let i=0;i<'Automation'.length; i++)
        {
            await page.keyboard.press('ArrowLeft')
        }

await page.keyboard.press('Shift') 

await page.keyboard.press('Backspace')
await page.waitForTimeout(5000)
//await expect(page).toHaveURL(/Playwright+Auto/)

});





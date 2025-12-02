const {test,expect} = require('@playwright/test') ;


test("Validate keyboard action page ",async function({page})
{


await page.goto('https://www.amazon.in/');

    page.locator("//input[@id='twotabsearchtextbox']").fill("trimmer");

    await page.waitForTimeout(5000)
await page.waitForSelector('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]');

const fromlist= await page.$$('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]');
for (let option of fromlist)
{
const value= await option.textContent();

console.log(value);

if (value.includes('trimmer philips men'))
{
    await option.click()
    break

}

}

await page.waitForTimeout(5000)

const Result=await page.locator("//span[@class='a-color-state a-text-bold']").textContent()

console.log("Output on the page as :" +Result);
await expect(Result).toContain("trimmer philips men")
/*
await page.keyboard.press('ArrowDown')
await page.keyboard.press('ArrowDown') 
await page.keyboard.press('ArrowDown') 
await page.keyboard.press('Enter') 

const suggestions= page.locator("//input[@id='twotabsearchtextbox']");
const count= await suggestions.count();
console.log("Total suggestions are :"+count);

*/ 

});

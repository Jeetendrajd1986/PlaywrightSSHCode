const {test,expect} = require('@playwright/test') ;


test("Validate Mouse Hower on Login page ",async function({page})
{
//await page.browser().window().maximize().goto('https://www.ebay.com/');
await page.goto('https://www.ebay.com/');

await page.locator("//li[@class='vl-flyout-nav__js-tab']//a[contains(text(),'Electronics')]").hover();
//await page.locator("//li[@class='vl-flyout-nav__js-tab']//a[contains(text(),'Electronics')]").hover({force:true});
await page.waitForTimeout(5000);
 await page.locator("//a[normalize-space()='Apple']").click();  
await page.waitForTimeout(5000);
await expect(page).toHaveURL(/Apple/); 

});



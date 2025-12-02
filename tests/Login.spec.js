const {test,expect} = require('@playwright/test') ;

test("Validate Login page ",async function({page})
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.getByPlaceholder('Username').fill('Admin',{delay:200});  
await page.locator("//input[@placeholder='Password']").fill('admin123', {delay:200});
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000);

await expect(page).toHaveURL(/dashboard/);

//await page.getByAltText('profile picture').click();
await page.locator("//p[@class='oxd-userdropdown-name']").click();
await page.getByText('Logout').click();

await expect(page).toHaveURL(/login/);      
await page.waitForTimeout(3000);

})

test("Validate Login page Pass ",async function({page})
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.getByPlaceholder('Username').fill('Admin',{delay:200});  
await page.locator("//input[@placeholder='Password']").fill('admin123', {delay:200});
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000);

await expect(page).toHaveURL(/dashboard/);

//await page.getByAltText('profile picture').click();
await page.locator("//p[@class='oxd-userdropdown-name']").click();
await page.getByText('Logout').click();

await expect(page).toHaveURL(/login/);      
await page.waitForTimeout(3000);

})

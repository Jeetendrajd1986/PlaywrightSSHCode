const {test,expect} = require('@playwright/test') ;

test.use({viewport:{width:1280,height:720}})

//1022 544

test("Validate Error on Login page ",async function({page})
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


console.log(await page.viewportSize().width)
console.log(await page.viewportSize().height)

await page.getByPlaceholder('Username').fill('Admin',{delay:200});  
await page.locator("//input[@placeholder='Password']").fill('admin1234', {delay:200});
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000);

const errroMessage =await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();

console.log("1. The error message is :"+ errroMessage);

await expect(errroMessage).toBe("Invalid credentials");
const errroMessage2 =await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").allTextContents();

console.log("2. The error message is :"+ errroMessage2);   

expect(errroMessage2.includes("Invalid credentials")).toBeTruthy();
//expect(errroMessage2.includes("error")).toBeTruthy();

})
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



test("My First test",async function({page})
{
expect(12).toBe(12)
expect(false).toBeFalsy
})

test.skip("My Second test",async function({page})
{
expect(100).toBe(101)
    
})
test("My Third test",async function({page})
{

expect(102).toBe(102)
expect(true).toBeTruthy

expect("Jeetendra Dodke".includes("Dodke")).toBeTruthy
    
})
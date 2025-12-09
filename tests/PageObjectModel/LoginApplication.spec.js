const {test,expect} = require('@playwright/test') ;

const LoginPage= require('../pages/loginpage');
const HomePage= require('../pages/HomePage');

test("Validate Login page ",async function({page})
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const login=new LoginPage(page);
await login.LoginToApplication();
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');    

});

test("Validate Loginot page ",async function({page})
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const login=new LoginPage(page);
await login.LoginToApplication();
const home=new HomePage(page);
await home.Logout();
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});
class LoginPage
{

constructor(page)
{
    this.page=page;
    this.usernameInput=page.getByPlaceholder('Username');
    this.passwordInput=page.locator("//input[@placeholder='Password']");
    this.loginButton=page.locator("button[type='submit']");
   
}

async LoginToApplication()
{
await this.usernameInput.fill('Admin');
await this.passwordInput.fill('admin123');
await this.loginButton.click();
await this.page.waitForTimeout(5000);

}


}
module.exports=LoginPage;

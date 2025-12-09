class HomePage

{

constructor(page)
{

this.page=page;
this.dropmenu= page.locator("//p[@class='oxd-userdropdown-name']");
this.logoutbutton= page.getByText('Logout')
}

async Logout()
{

this.dropmenu.click();
await this.page.waitForTimeout(2000);
this.logoutbutton.click();
}

}
module.exports=HomePage;
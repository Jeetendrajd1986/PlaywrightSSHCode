const {test,expect} = require('@playwright/test') ;
//test.use({viewport:{width:1280,height:720}})


test("Validate Alerts",async function({page})
{

await page.goto("http://the-internet.herokuapp.com/javascript_alerts");


// Types of Alert are Alert, Confirm and Prompt 
page.on('dialog',async(dialog)=>
{

    console.log("Alert message :"+ dialog.message());
    

    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am a JS Alert");
    await dialog.accept();  //Clcik on OK button
})

await page.locator("button[onclick='jsAlert()']").click();

await page.waitForTimeout(5000);

});


test("Validate Confirm",async function({page})
{

await page.goto("http://the-internet.herokuapp.com/javascript_alerts");


page.on('dialog',async(Confirm)=>
{

    console.log("Alert message :"+ Confirm.message());
    

    expect(Confirm.type()).toContain("confirm");
    expect(Confirm.message()).toContain("I am a JS Confirm");
    await Confirm.dismiss(); //Dismiss alert Clcik on cancel button
    
await page.waitForTimeout(5000);
})

await page.locator("//button[normalize-space()='Click for JS Confirm']").click();



await page.waitForTimeout(5000);

});


test("Validate Prompt",async function({page})
{

await page.goto("http://the-internet.herokuapp.com/javascript_alerts");


page.on('dialog',async(Prompt)=>
{

    console.log("Alert message :"+ Prompt.message());
    

    expect(Prompt.type()).toContain("prompt");
    expect(Prompt.message()).toContain("I am a JS prompt");
    await Prompt.accept("Test By Tester");  //Enter Data n Prompt and Click OK button 

})

await page.locator("//button[normalize-space()='Click for JS Prompt']").click();



await page.waitForTimeout(5000);

});

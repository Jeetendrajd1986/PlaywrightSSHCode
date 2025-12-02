const {test,expect} = require('@playwright/test') ;


test("Validate single file upload  ",async function({page})

{
 await page.goto('https://the-internet.herokuapp.com/upload');
 //await page.locator("//input[@id='file-upload']").setInputFiles("C:/Users/RAHUL D/Downloads/images.jpg");
  await page.locator("//input[@id='file-upload']").setInputFiles("./tests/files/samplefile.txt");
  await page.waitForTimeout(5000);
 await page.locator("//input[@id='file-submit']").click();
 await page.waitForTimeout(5000);
 await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible(); 
  
})  

test("Validate multiple file upload  ",async function({page})

{
     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
          
await page.waitForTimeout(5000);
   await page.locator("//input[@id='filesToUpload']")
         .setInputFiles(["./tests/files/Samplefile.txt","./tests/files/images.jpg"])
       
    await page.waitForTimeout(5000);
    await expect(page.locator("//li[normalize-space()='images.jpg']")).toBeVisible(); 

     await page.locator("//input[@id='filesToUpload']")
         .setInputFiles([]);
       
    await page.waitForTimeout(5000);
     await expect(page.locator("//li[normalize-space()='No Files Selected']")).toBeVisible(); 
})
const {test,expect} = require('@playwright/test') ;
//test.use({viewport:{width:1280,height:720}})


test("Validate Drop dwon featur on the page ",async function({page})
{

    await page.goto('https://kitchen.applitools.com/ingredients/select');

    // <option value="paprika" xpath="1">Paprika</option>
await page.locator("//select[@id='spices-select-single']").selectOption({label:'Paprika'});

await page.waitForTimeout(5000);

await page.locator("//select[@id='spices-select-single']").selectOption({value:'garlic'});

await page.waitForTimeout(5000);
//select[@id='spices-select-single']
const value =await page.locator("//select[@id='spices-select-single']").textContent();

console.log("The selected value is :"+ value);

await expect(value).toContain("Garlic" );
await page.waitForTimeout(5000);

await page.getByLabel('Multi Select').selectOption(['garlic'],{delay:200});
await page.waitForTimeout(5000);



});






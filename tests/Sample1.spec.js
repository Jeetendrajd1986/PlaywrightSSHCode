/* "Test" is for declare teh function and  "Expect" aseertion */

const {test,expect} = require('@playwright/test') ;
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


/* If user wants to test only one run the use below test.only function */

/*

test.only("My Fourth test",async function({page})
{

expect("Jeetendra Dodke").toContain("Jeetendra")
    
})

*/
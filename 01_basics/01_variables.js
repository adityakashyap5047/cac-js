const accountId = 12345;                        // Syntax for constant variable declaration
let accountEmail = "adityakumar@gmil.com";
var accountPassword = "password123";
accountCity = "Delhi";                      // Syntax for variable declaration without using let, const or var but donot use this
let accountState;           // undefined

//accountId = 54321; // TypeError: Assignment to constant variable.

accountEmail = "ak@gmail.com";
accountPassword = "password321";
accountCity = "Mumbai";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/
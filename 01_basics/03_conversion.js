let score = 98
let value = "25"
let randomNumber = "33abc"
let float = "3.74"
let unknown = null
let random;
let isLoggedIn = false

console.log(typeof score);      // number
console.log(typeof value);      // string

let numberValue = Number(value)
let integerValue = parseInt(value)

console.log(typeof numberValue);        // number
console.log(typeof integerValue);        // number

let valueRandomNumber = Number(randomNumber)
console.log(valueRandomNumber);      // NaN => Not a Number
console.log(typeof valueRandomNumber);        // number

let valueFloat = Number(float)
console.log(valueFloat);        // 3.14
console.log(typeof valueFloat);      // number

let unknownValue = Number(unknown)
console.log(unknownValue);       // 0
console.log(typeof unknownValue);     // number

let randomValue = Number(random)
console.log(randomValue);       // NaN
console.log(typeof randomValue);     // number

let isLoggedInValue = Number(isLoggedIn)
console.log(isLoggedInValue);        // 0
console.log(typeof isLoggedInValue);      // number



/*
    "33" => 33
    "33abc" => NaN
    true => 1
    false => 0
*/

let isSignedIn = 1
let firstName = "Aditya"
let middleName = ""

let booleanIsSignedIn = Boolean(isSignedIn)
console.log(booleanIsSignedIn);      // true

let booleanFirstName = Boolean(firstName)
console.log(booleanFirstName);        // true

let booleanMiddleName = Boolean(middleName)
console.log(booleanMiddleName);      // false


/*
    1 => true
    0 => false
    "Aditya" => true
    "" => false
*/



let someNumber = 33

let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);                // "33"
console.log(typeof stringSomeNumber);        // string
/* 
    Data Types :- 

            Primitive Data Types :- Call by Value

                1. String
                2. Number
                3. Boolean
                4. null
                5. undefined
                6. Symbol       -> It is used to make value to unique.
                7. BigInt       -> It is used to store large numbers.

            Non-Primitive Data Types or Reference type:- Call by Reference

                1. Array
                2. Object
                3. Function

    Note :- JavaScript is a dynamically typed language. It means we don't need to specify the data type of the variable.
*/


// Primitive Data Types

let score = 100;
let scoreValue = 43.3;

let isLoggedIn = true;
let outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false
console.log(id);
console.log(typeof id); // symbol
console.log(anotherId);
console.log(typeof anotherId); // symbol

const bigNumber = 1234567890123456789012345678n;
console.log(bigNumber);
console.log(typeof bigNumber); // bigint

// Non-Primitive Data Types

let names = ['John', 'Doe', 'Smith'];       // Array

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};                                          // Object

let add = function(a, b) {
    return a + b;
}                                           // Function 

console.log(typeof names);      // object
console.log(typeof person);     // object
console.log(typeof add);        // function
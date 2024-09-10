let value = 3
let negValue = -value

console.log(negValue) // -3

console.log(2 + 3)
console.log(2 - 3)
console.log(2 * 3)
console.log(2 ** 3)
console.log(2 / 3)
console.log(2 % 3)

let str1 = "hello"
let str2 = " World"

let str3 = str1 + str2          // concatenation and there is no subtraction, multiplication, division, and modulus operation for string
console.log(str3) // hello World

console.log(1 + 2) // 3;
console.log("1" + 2) // 12;
console.log(1 + "2") // 12;
console.log("1" + "2") // 12;
console.log(1 - "2") // -1;
console.log("1" - 2) // -1;
console.log("1" - "2") // -1;

console.log("1" + 4 + 3) // 143;
console.log(1 + 4 + "3") // 53;

console.log(typeof ("1" + 4 + 3)) // string;
console.log(typeof (1 + 4 + "3")) // string;


console.log("*******************************************");

console.log(true);
console.log(+true); // 1
//console.log(true+);  // SyntaxError: Unexpected token ')'

console.log(+"")    // 0

let num1, num2, num3

num1 = num2 = num3 = 8 * 4

let gameCounter = 100
gameCounter++                       //post increment
console.log(gameCounter) // 101

let score = 56
++score                     //pre increment
console.log(score) // 57
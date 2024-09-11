const name = "Aditya"
const repoCount = 25

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("SnakeName");
console.log(gameName);
console.log(typeof gameName);           // object

console.log(gameName.length);
console.log(gameName.__proto__);


console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("Name"));

const newName = gameName.substring(0, 5);
console.log(newName);

const anotherString = gameName.slice(-7, 8);
console.log("anotherString", anotherString);

console.log(gameName.substring(-7, 5));             // treated as gameName.substring(0, 5)

const newStringOne = "        Aditya       "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://aditya%20kumar"

console.log(url.replace('%20', ('-')))

console.log(url.includes('aditya'));

console.log(url.split('%20'));

/* 

    anchor
    at
    big
    blink
    bold
    charAt
    charCodeAt
    codePointAt
    concat
    constructor
    endsWith
    fixed
    fontcolor
    fontsize
    includes
    indexOf
    isWellFormed
    italics
    lastIndexOf
    length
    link
    localeCompare
    match
    matchAll
    normalize
    padEnd
    padStart
    repeat
    replace
    replaceAll
    search
    slice
    small
    split
    startsWith
    strike
    sub
    substr
    substring
    sup
    toLocaleLowerCase
    toLocaleUpperCase
    toLowerCase
    toString
    toUpperCase
    toWellFormed
    trim
    trimEnd
    trimLeft
    trimRight
    trimStart
    valueOf
    Symbol(Symbol.iterator)

*/
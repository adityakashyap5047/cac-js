"use strict";       // treat all js code as new version of js and there is not backward compatibility adn but now automatically it runs on strict mode

// alert("alert is not defined in node.js it is defined in browser")

// console.log("World");  conole.log("World")   Don't use this because code redability is not good

/*
    Documentation:
            tcc39.es/ecma262
            developer.mozilla.org
*/

let name = "Aditya"
let age = 19
let isLoggedIn = false
let state = null            // For example we request a server for temperature of the day and it gives us some abnormal value then we can use null

// Data Types

/* 
    number => 2 to power 53 - 1
    bigint => 
    string => ""
    boolean => true or false
    null => standalone value which represents nothing or empty value
    undefined => variable is declared but not assigned any value
    symbol => unique value

    Object
*/

//typeof

console.log(typeof name);
console.log(typeof(age));
console.log(typeof null);      // null is a object in js
console.log(typeof undefined);      // undefined is a type in js
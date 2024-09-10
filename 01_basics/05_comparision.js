console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)


console.log("*******************************************");

console.log("2" > 1)
console.log("02" > 1)

console.log("Make sure that when we compare two values, they are of the same data type. Otherwise, JavaScript will try to convert and compare them. This can lead to some unexpected results.")
console.log("Typescript is a superset of JavaScript, so it will show an error in such cases.")

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null <= 0);

console.log("The reason is that eqality check ( == ) and comparison ( >, <, >=, <= ) operators work differently.")
console.log("The comparison operator converts null to a number, treating it as 0.")


console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);


// Strict equality

console.log("2" == 2)
console.log("2" === 2)
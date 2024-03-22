// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


let car1 = "Toyota"
// Tests for equality and inequality with strings
console.log(car1 === "Toyota");
console.log(car1 !== "Toyota");

//  Tests using the lower case function
console.log(car1.toLowerCase() === "toyota")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 23;
console.log(number === 23)
console.log(number !== 23)
console.log(number > 23)
console.log(number < 23)
console.log(number >= 23)
console.log(number <= 23)

// Tests using "and" and "or" operators
console.log(car1 === "toyota" && car1 !== "toyota"); //one false and true = false
console.log(car1.toLowerCase() === "toyota" && car1 !== "toyota")//true and true = true
console.log(car1 === "toyota" || car1 !== "toyota") //true


"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Amrud", "Mango", "Bananas"];
favorite_fruits.map((Element) => {
    if (Element == "Amrud") {
        console.log("You really like Amrud!");
    }
    if (Element == "Strawberry") {
        console.log("You really like Strawberry!");
    }
    if (Element == "Mango") {
        console.log("You really like Mango!");
    }
    if (Element == "Apple") {
        console.log("You really like Apple!");
    }
    if (Element == "Bananas") {
        console.log("You really like Bananas!");
    }
});

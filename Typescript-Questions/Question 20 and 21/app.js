"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = ["Japan", "Pakistan", "India", "China", "Iran"];
console.log("countries:", countries);
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let countries1 = [
    { name: "pakistan", capital: "Islamabad", Language: "urdu" },
    { name: "japan", capital: "Tokyo", Language: "Japanese" },
    { name: "India", capital: "New Delhi", Language: "Hindi" },
    { name: "China", capital: "Beijing", Language: "Mandarin" },
    { name: "Iran", capital: "Tehran", Language: "Persian" },
];
for (let country of countries1) {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Language: ${country.Language}`);
}
;

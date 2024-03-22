"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...extras) {
    const car = {
        manufacturer,
        modelName
    };
    // Process keyword arguments
    for (const [key, value] of extras) {
        car[key] = value;
    }
    return car;
}
// Call the function with required information and two additional name-value pairs
const carInfo = createCar("Toyota", "Camry", ["color", "Blue"], ["hasSunroof", true]);
// Print the returned object to ensure information is stored correctly
console.log(carInfo);

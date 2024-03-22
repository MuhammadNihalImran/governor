// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// function make_shirt(size: string,message: string) {
//     console.log(`T-shirt size: ${size}`);
//     console.log(`Message: ${message}`);
// }

// // Call the function with specific size and message
// make_shirt("Large", "this T-shirt for Which is large");


// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message: ${message}`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "Custom message for a Small shirt");
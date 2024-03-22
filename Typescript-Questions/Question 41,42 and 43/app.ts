// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    // Modify the array by adding "the Great" to each magician's name
    return magicians.map(magician => `${magician} the Great`);
}

const original_magicians = ["Roger Lapin", "David Copperfield", "Paul Daniels"];

// Create a copy of the original array
const copied_magicians = [...original_magicians];

// Call make_great() with the copied array
const great_magicians = make_great(copied_magicians);

// Show the original array
console.log("Original Magicians:");
show_magicians(original_magicians);

// Show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
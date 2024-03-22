// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let Name:string  = "Nihal"
console.log("lowercase:",Name.toLowerCase());
console.log("uppercase:",Name.toUpperCase());
console.log("titlecase:",Name);
let firstLetterInUppercase:string = Name.charAt(0).toUpperCase();
let slice = Name.slice(1);
console.log( firstLetterInUppercase + slice);
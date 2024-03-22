"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["safwan", "nihal", "huzaifa", "owais", "abdullah"];
let new_users = ["nihal", "mubashir", "Ashan", "safwan", "aneeq"];
for (let user1 of new_users) {
    let usernameTaken = false;
    for (let user2 of current_users) {
        if (user1.toLowerCase() === user2.toLowerCase()) {
            usernameTaken = true;
            break; // Exit the loop once a match is found
        }
    }
    if (usernameTaken) {
        console.log(`The username '${user1}' is not available. The person will need to enter a new username.`);
    }
    else {
        console.log(`The username '${user1}' is available.`);
    }
}

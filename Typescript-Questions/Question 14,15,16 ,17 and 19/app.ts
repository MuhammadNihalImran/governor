// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest = ["Safwan","Huzifa","Owais"]
 
guest.map((e)=>{
    console.log("invited to dinner",e);
});


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

console.log(guest.pop() ,"who can’t make it");

guest.unshift("Ashan");
guest.map((e)=>{
    console.log(e, "I invite you to dinner");
});


// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

console.log("Great news! We found a bigger dinner table.");
guest.splice(2, 0, "nihal")
 guest.push("zohan")
 guest.unshift("Raheel")
 guest.map((e)=>{
    console.log(e,"I invite you to dinner");
});


// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let removeguest = guest.splice(2);

console.log("remaningGuest", guest); 

for (let removedGuest of removeguest) {
  console.log(`I'm sorry, ${removedGuest}, but we can't invite you to dinner.`);
}
if (guest.length > 0) {
  for (let remainingGuest of guest) {
    console.log(`${remainingGuest}, you are still invited.`);
  }
} else {
  console.log("All guests have been removed.");
}
guest.pop();
guest.pop();


// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(`Number of people invited to dinner: ${guest.length}`);




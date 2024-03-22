// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


let fruits = ["Apple","Banana","Orange"];
console.log("fruits:",fruits[3]);
if(fruits.length>3){
  console.log("fruits:",fruits[3]);
}else{
  console.log("Index 3 is out of bounds for the array.");
}
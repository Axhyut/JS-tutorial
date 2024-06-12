//Numbers

const balance = new Number(100)
console.log(balance);

//toString prototype:
console.log(balance.toString()); //it prints the number as well as it changes the data type into string
console.log(balance.toString().length);

//toFixed prototype:
console.log(balance.toFixed(2)); //it provides the number of digits after decimal

//toPrecision prototype:
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3));  //it tells the number of precision

//toLocaleString prototype:
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //this prototype adds commas to the hundreds in indian system
console.log(hundreds.toLocaleString()); //adds comma as per the international system

//Math

console.log(Math); //it is a property with object data type in JS

//absolute property:
console.log(Math.abs(-4)); //it converts the negative integer to positive integer

//round property
console.log(Math.round(4.6)); //rounds up the integer value

//ceiling property:
console.log(Math.ceil(4.1)); //if a integer value is slight greater than the absolute value it converts it to the next big absolute value 

//floor property:
console.log(Math.floor(4.9)); //opposite of ceiling property

//min-max property:
console.log(Math.min(4, 3, 1 ,5));
console.log(Math.max(4, 3, 1 ,5)); //finds the min and max values in an array

//random property:
console.log(Math.random()); //always gives random values between 0 and 1 
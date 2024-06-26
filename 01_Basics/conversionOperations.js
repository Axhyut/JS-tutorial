let score = "33"
let password = "2233aabb"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let valueOfPass = Number(password)
console.log(typeof valueOfPass);  //thus a string is converted into a number

console.log(valueOfPass);  //but when we actually see the value it gives NaN(not a number) output

// "33" => 33
// "2233aabb" => NaN
// true => 1 and false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let checkStirng1 = ""  //passing an empty string
let booleanCheckString1 = Boolean(checkStirng1)
console.log(booleanCheckString1);
//the output result is false

let checkStirng2 = "Achyut"  //passing a non-empty string
let booleanCheckString2 = Boolean(checkStirng2)
console.log(booleanCheckString2);
//the output result is true

//1 => true and 0 => false
//"" => false and "Achyut" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

//OPERATIONS
let value = 3
let negValue = -value 
console.log(negValue);  // Makes the value of the variable "value", negative

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); //It raises the 3 to the power of 2
console.log(2/3);
console.log(2%3); //It gives the remainder

let str1 = "Hello"
let str2 = " Achyut" //here space is given just so that hello and achyut has a space in-between

let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1 + 2");
console.log("1" + 2 + 2); //output: 122
console.log(1 + 2 + "2"); //output: 32
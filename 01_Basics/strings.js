const name = "Achyut "
const age = 21

console.log(name + age + " True"); //This is the normally used syntax
//but it is a little too outdated and is not recommend to used

console.log(`Hello my name is ${name} and my age is ${age}`); //instead we can use back-ticks
//it is highly recommend in today's date for its readablility and simplicity
//it is known as "string interpolation"

//there is another way of declaring variable:
let gameName = new String("RabiOP_07");
console.log(gameName[0]); //there is a concept called key-value pair (don't confuse with array)
//here for 0 key the vlue is R, for 1 key the value is a and so on...

//Note: there are various types of prototypes used in strings
console.log(gameName.length);
console.log(gameName.toUpperCase());
//we can also know which character of the string is at which poistion by using the protoytpe charAt() 
console.log(gameName.charAt(0));
//we can also know which index belongs to which chacaracter of the string by using the prototype indexOf()
console.log(gameName.indexOf('a'));

//now we see another prototype used to do sub-string
const newString = gameName.substring(0, 4) //4 ka value include nhi ho rhi hai
console.log(newString);

//slice prototype:
const anotherString = gameName.slice(-8, 4) //in slice we can also give the reverse value (negative value)
console.log(anotherString);

//trim prototype:
const newStringOne = "   Achyut   " //sometimes we don't need these extra spaces; that's where the use of trim coems into play
console.log(newStringOne);
console.log(newStringOne.trim()); //the trim prototype basically removes the whitespaces

//replace prototype:
const address = "Nachani Chuk, Jorhat"
const address2 = address.replace('Nachani', 'Dhulia')
console.log(address2); //as the name suggest it just simply replace strings

//split prototype
console.log(gameName.split('-'));
//Primitive Data Types (7):
//String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
//even if the symbol value is same the ids are not
//that's the special case of symbol

console.log(id == anotherId)  //here the return values are not same

//Non-primitive Data Types:
//Arrays, Objects, Functions

//arrays 
const heroes = ["Black Panther", "Spiderman", "Moonknight"]
//objects
const myObj = {
    name: Achyut,
    age: 21
}
//functions
const myFn = function(){
    console.log("Hello")
}

//JavaScript is a dynamically typed language, meaning that variable types are determined at runtime rather than at compile-time, 
//and variables can hold values of any type without any type enforcement.

//Note: if we use typeof operator to find out the data type of null it will show the data type as object
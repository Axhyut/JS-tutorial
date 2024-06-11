//there are two types of memory: Stack & Heap
//Stack memory is used in Primitive data type and vice verse

//Working of Stack Memory: whenever we change the value it creates a copy of the variable stored
//so even if we change the value later the original value stored int the variable doesnot change
//the change happens in the copied version of the variable
//for eg:

let myName = "Achyut"
let anotherName = myName
anotherName = "Rabi"

console.log(myName);
console.log(anotherName);


//Working of Heap Memory: unlike the Stack Memory here it doest create any copyof the original variable
//it gives staright reference of the original value of the data stored in the memory
//so if we change the value it also affects the original one
//for eg:

let userOne = {
    email: "userOne@gmail.com",
    upiId: "user1@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);
//object literals
const mySym = Symbol("key1")

const jsUsr = {
    name: "Achyut",
    age: 21,
    location: "Assam",
    email: "achyut@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "key1"                            //symbols are declared like this in object
}

console.log(jsUsr[mySym]);                     //correct way to use symbols

jsUsr.email = "akdinternational@gmail.com"     //we can overwrite values like this
//Object.freeze(jsUsr)                           //this freezes the values not allowing to change

console.log(jsUsr);

jsUsr.greeting = function(){
    console.log("Hello");                       //this is how function is declared in objects
}

console.log(jsUsr.greeting());

jsUsr.greetingTwo = function() {
    console.log(`hello ${this.name}`);
}

console.log(jsUsr.greetingTwo());
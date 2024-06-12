//singletom object

const jsUser = new Object()

console.log(jsUser);

//object nesting

const regularUsr = {
    email: "123@gmail.com",
    fullName: {
        firstName: "12",
        lastName: "23"
    },
    id: "xyz"
}

console.log(regularUsr.fullName.firstName);

const l1 = {
    1: "a",
    2: "b"
}

const l2 = {
    3: "c",
    4: "d"
}

const l3 = Object.assign(l1, l2) //combines object

const l4 = {...l1, ...l2}  //spread method (all time best method)

console.log(l3);
console.log(l4);
console.log(Object.keys(regularUsr)); //here we see that all the keys are stored in an array and we can use this in loop in various ways
console.log(Object.values(regularUsr)); //just like keys we can also see the values
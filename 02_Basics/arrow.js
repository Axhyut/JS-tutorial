//this keyword: it tells about the current constant

const user = {
    userName: "Achyut",
    price: "999",

    welcomeMessage: function(){
        console.log(`Welcome ${this.userName}`);
    }
}
user.welcomeMessage()

user.userName = "Sam"
user.welcomeMessage()



function chai() {
    let username = "Achyut"
    console.log(this.username);
}

chai()  //this opeartor can only be used in objects and it is seen that it becomes useless in a function

//so we will remove the function declaration and use the arrow function
const hello = () => {
    let username = "Achyut"
    console.log(this);
}

hello()   //returns an empty object

//arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 4)); 

//let's see another syntax of arrow function
const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(2, 3, 5));

//return an object by arrow function
const hi = (num1, num2) => ({username: "Kela"})
console.log(hi(1, 2));


const newArr = [2, 5, 3, 7, 8]
newArr.forEach(() => {})
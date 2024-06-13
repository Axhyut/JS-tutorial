const arr = ["js", "py", "cpp", "java", "rb"]


//for each needs to use call back function
arr.forEach( function (item) {
    console.log(item);
} )


//either we use it like function keyword or we can use arrow function
//here too there is no need for storing in a variable so no need for assigning any name
arr.forEach( (item) => {
    console.log(item);
} )


//there is another way to implement for each function
function printMe(item) {
    console.log(item);
}

arr.forEach(printMe)


arr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
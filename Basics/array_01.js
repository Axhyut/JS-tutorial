//JS arrays are resizable

const arr = [1, 2, 3, 4]
const arr2 = new Array(1, 2, 3, 4, 5)

arr.push(6) //push new elements to the array
console.log(arr);

arr.pop() //pop deletes the last element from the array
console.log(arr);

arr.unshift(9) //this adds one element to the starting of the array
console.log(arr);

//also to remove unshift, we use shift
arr.shift()
console.log(arr);

const newArr = arr.join() //adds all the elements of an array into a string, separated by a specified seprator
console.log(arr);
console.log(newArr); //now the type of newArr is string

//slice and splice
console.log("A", arr); //original array

const n1 = arr.slice(1, 3)
console.log(n1); //after using slice function
console.log("B", arr); //no changes can be seen in the original array 

const n2 = arr.splice(1,3)
console.log(n2);
console.log("C", arr); //splice removes the targeted elements from the original array 
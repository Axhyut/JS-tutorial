const myNum = [1, 2, 3]

let myTotal = myNum.reduce(function (acc, currval) {
    console.log(`acc: ${acc} currval: ${currval}`);
    return acc + currval
}, 0)   //here 0 implies the starting value of the accumulator, we can take other numbers also like 2, 3 etc.  

console.log(myTotal);


//now by doing arrow function

myTotal = myNum.reduce( (acc, currval) => {
    console.log(`acc: ${acc} currval: ${currval}`);
    return acc + currval
}, 3 )

console.log(myTotal);
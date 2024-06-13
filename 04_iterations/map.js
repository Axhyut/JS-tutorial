const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = num.map( (items) => items + 10 )
console.log(newNums);

//nested map and filter

const myNum = [1, 2, 3, 4, 5 ,6 , 7, 8, 9,10]

newNums = myNum.map( (num) => num * 10 ).map( (num) => num + 10 ).filter( (num) => num >= 40 ) 

console.log(newNums);
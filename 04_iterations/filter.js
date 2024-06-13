//filter is similar to forEach loop

const myNums = [1, 2, 3, 4, 5, 6, 7, ,8 ,9]

const newNums = myNums.filter( (num) => {
    return num > 4
} )

console.log(newNums);



//forEach 

const anotherNums = []


myNums.forEach( (num) => {
    if (num > 4) {
        anotherNums.push(num);
    }
} )

console.log(anotherNums);



//Note: if we have given a local scope to access it globally we have to return it 
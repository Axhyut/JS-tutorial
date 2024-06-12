//function and parameter

function addNum(num1, num2){
    console.log(num1 + num2);
}

addNum(3, 4)

function multNum(num1, num2){
    let result = num1*num2
    return result
}

result = multNum(2, 5)
console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Achyut"));
//when JS assume that a pre-defined string is always true
//without checking
const userEmail = "Achyut@gmail.com"

if (userEmail) {
    console.log("the User can LogIn");
}else{
    console.log("the User can't LogIn");
}

//falsy values: 
//false, 0, -0, "", null, undefined, NaN

//truthy values:
//true, "0", "false", " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {     //to check the obj is empty or not we see its key value using Object.keys() here the use of parenthesis makes it a array value 
    console.log("Object is empty");           //by using .lenght we can check the object turned array's length       
}




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10         //?? prints the first value
console.log(val1);

let val2 = null ?? 10  //?? ignores the null
console.log(val2);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");
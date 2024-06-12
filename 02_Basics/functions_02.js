//situation like when someone makes a e-commerce website and the user uses the cart for a large number of time
//the developer doesn't know the amount of parameters he have to use as oit is upto the user

function cartPrice(...num1) {       //spread opreator is used
    return num1
}

console.log(cartPrice(100, 200, 300, 400, 500, 600));

//functions with objects

const user = {
    userName: "Achyut",
    id: "XYZ01%%(20%)>/<[]"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and id is ${anyobject.id}`);
}

handleObject(user)

//functions with arrays

const myNewArr = [200, 400, 600, 800]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArr));
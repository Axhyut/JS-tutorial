//for in: Object specific

const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);    //key prints the key while Object[key] prints its values
}


//the main problem of for in loop is it only prints the keys 
//let's see this as an example in array
const programming = ["js", "cpp", "py", "c", "java"]

for (const key in programming) {
    console.log(key);                          //it only prints the keys of the arrays as 0, 1, 2, 3, 4
}

//but

for (const key in programming) {
    console.log(programming[key]);
}
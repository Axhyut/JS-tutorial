//for of: array specific loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


//for of: string specific

const greetings = "Hello World"

for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    console.log(`Each Character is ${greet}`);
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Maps: kind of object which contains key-value pair

const map = new Map()
map.set("IN", "India")
map.set("IN", "India")         //it always take unique values and doesn't print india twice 
map.set("RU", "Russia")
map.set("JP", "Japan")

console.log(map);

//syntax #1
for (const keys of map) {
    console.log(keys);
}

//syntax #2
for (const [keys, values] of map) {
    console.log(keys, ':-', values);
}

//Note: for of loop doesn't work with Object
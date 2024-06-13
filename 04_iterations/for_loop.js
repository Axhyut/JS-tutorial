//for loop

for (let i = 0; i < 10; i++) {
    const element = i;

    if (element == 5) {
        console.log("we got the middle number");
    }
    console.log(element);
    
}



//Nested Loop
for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);
        console.log(i + '*' + j + '=' + i * j);
        
    }  
}

let myAnimeList = ["One Piece", "Naruto", "Berserk", "Vinland Saga", "Attack on Titan"]

console.log(myAnimeList.length);

for (let i = 0; i < myAnimeList.length; i++) {
    const element = myAnimeList[i];
    console.log(element);
}


//break

for (let i = 0; i < 20; i++) {

    if (i == 5) {
        console.log("The loop is stopped");
        break;
    }
    console.log(`The value of i is ${i}`);
    
}


//continue

for (let i = 0; i < 20; i++) {

    if (i == 5) {
        console.log("The loop is stopped");
        continue;
    }
    console.log(`The value of i is ${i}`);
    
}
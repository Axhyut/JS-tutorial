//while

let index = 0

while (index < 10) {
    console.log(`The value of index is ${index}`);
    index = index + 2;
}


let myAnimeList = ["One Piece", "Naruto", "Berserk", "Vinland Saga", "Attack on Titan"]
let arr = 0

while (arr < myAnimeList.length) {
    console.log(`Value is ${myAnimeList[arr]}`);
    arr = arr + 1;
}



//do while


let score = 1

do {
    console.log(`Score is ${score}`);   
    score++;
} while (score <= 10);
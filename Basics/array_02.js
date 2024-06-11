const marvel = ["spiderman", "black panther", "moonknight"]
const dc = ["batman", "shazam", "robin"]

marvel.push(dc)
console.log(marvel); //this will create array within array
console.log(marvel[3][1]); //this will give the result of the fourth element within the array 'marvel' i.e. 'dc' array's second element

const newMarvel = marvel.concat(dc) //when we concat it combines all the elements of the arrays 
console.log(newMarvel);

const all_heroes_marvel = [...marvel, ...dc] //it is known as spreading method, alternative of concat
console.log(all_heroes_marvel);

//Flat: this property returns a new array with all the sub-array elements concatenated into it recursively upto the specified depth
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(2)
console.log(realAnotherArr);

const arr1 = Array.from("ACHYUT") //it converts the string into an array 
console.log(arr1);

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));  //returns a new array from a set of elements
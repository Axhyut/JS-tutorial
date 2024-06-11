//Dates

//Date() is a object
const myDate = new Date()
console.log(myDate.toString()); //it makes the date readable
console.log(myDate.toDateString()); //only date
console.log(myDate.toLocaleString()); //both date and time

const newDate = new Date(2023, 7, 21)
console.log(newDate.toDateString());
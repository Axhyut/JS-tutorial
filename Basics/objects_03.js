//object destructuring
const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//normally we use course.courseInstructor
//but let's see another syntax which is used by professionals

const {courseInstructor: hi} = course        //we can also destructure the key by giving my own name
console.log(hi);

//in react also destucturing method is used widely, specially when they use lots of props


//APIs in JS
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. 
// Key Features of JSON:
// 1. Format:
// JSON is text-based and consists of key-value pairs.
// It uses JavaScript syntax for representing data structures, but it is language-independent, meaning it can be used with most programming languages.
// 2. Syntax:
// Objects: Enclosed in curly braces {} and contain key-value pairs. Keys are strings and values can be strings, numbers, objects, arrays, true, false, or null.
// Arrays: Enclosed in square brackets [] and can contain multiple values separated by commas.
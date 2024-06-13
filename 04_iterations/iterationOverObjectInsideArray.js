//here we declare an array containing objects


const codeLang = [
    {
        language: "Javascript",
        languageFileName: "js"
    },
    {
        language: "Java",
        languageFileName: "java"
    },
    {
        language: "Python",
        languageFileName: "py"
    }
]

//Using for each loop
//arrow function lagake call back function likh diya
codeLang.forEach( (item) => {
    console.log(item.language);
} )
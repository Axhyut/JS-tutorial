let a = 100

if (true) {
    let a = 10
    
    console.log("LocalScope: ", a);
}

console.log("GlobalScope: ", a);


//nested scope

function one(){
    const userName = "Achyut"

    function two(){
        const website = "YouTube"
        console.log(userName);
        console.log(website);
    }

    two()
}

one()


//nested scope in if-else

if (true) {
    const name = "Achyut"

    if (name === "Achyut") {
        const web = " Hotstar"
        console.log(name + web);
    }
}
// Code your solution in this file.
function lowerCaseDrivers(arr) {
     const arr2 = arr.map(name => name.toLowerCase())
    return arr2

}

function nameToAttributes(arr) {
     
        let newobj = []
         arr.map(name => newobj.push({firstName: name.split(" ")[0], lastName: name.split(" ")[1]}))   
         return newobj   
}

function attributesToPhrase(arr) {
return arr.map(driver => `${driver.name} is from ${driver.hometown}`)

}
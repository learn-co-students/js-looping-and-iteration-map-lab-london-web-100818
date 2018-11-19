// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(array) {
    return array.map(driver => {
        return {
            firstName: driver.split(" ")[0],
            lastName: driver.split(" ")[1]
        }
    })
}

function attributesToPhrase(array) {
    return array.map(driver => `${driver.name} is from ${driver.hometown}`)
}


// const drivers = [
//     'Bobby Smith',
//     'Sammy Watkins',
//     'Sally Jenkins',
//     'Annette Sawyer',
//     'Sarah Hucklebee',
//     'bobby ridge'
// ];

// function nameToAttributes(drivers) {
//     const newDrivers = array.map(function (e) {
//         debugger
//     })
//     return newDrivers
// }
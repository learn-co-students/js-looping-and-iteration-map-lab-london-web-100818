// Code your solution in this file.
function lowerCaseDrivers(array) {
    return array.map(toLowerCase);
}

function toLowerCase(string) {
    return string.toLowerCase()
}

function nameToAttributes(array) {
    return array.map(toAttributes);
}

function toAttributes(string) {
    return Object.assign ({}, 
        {firstName: string.split(' ')[0]}, {lastName: string.split(' ')[1]});
}

function attributesToPhrase(array) {
    return array.map(toPhrase);
}

function toPhrase(obj) {
    return (`${obj.name} is from ${obj.hometown}`)
}

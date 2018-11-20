function lowerCaseDrivers(drivers) {
  return drivers.map(driversName=>driversName.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map (function(driverName) {
    const name=driverName.split(' ')[0];
    const surname=driverName.split(' ')[1];
    return {firstName: name, lastName: surname}
    debugger
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driverName) {
    return `${driverName.name} is from ${driverName.hometown}`
  }
  )
}

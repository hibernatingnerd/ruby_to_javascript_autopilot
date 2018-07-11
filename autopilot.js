// create a function that creates a newCar
function getNewCar(city, passengers) {
  var newCar = {
    'city': city,
    'passenger': passengers,
    'gas': 100,
  }
  return newCar;
};

// create Array to hold newCar objects. Add car objec to the array when called.
var carArray = [];
function addCar(car) {
  carArray.push(car);
  console.log("Adding new car to fleet. Fleet size is now " + carArray.length);
};

// function to add passengers to the car object.
function addPassengers(passNum, carObj) {
  carObj.passenger = passNum;
  carObj.gas -= 10;
};

// function to travel to a destination

function getDestination(carObj) {
  if (carObj.city === 'Toronto') {
    var value = 'Mississauga';
  } else if (carObj.city === 'Mississauga') {
    var value = 'London';
  } else if (carObj.city === 'London') {
    var value = 'Toronto';
  };
  return value
};

// function to fill up your gas
function fillUpGas(carObj) {
  oldGas = carObj.gas;
  carObj.gas = 100;
  console.log("Filled up to " + carObj.gas + " gas from " + oldGas);
};

// display gas levels
function showGas(carObj) {
  console.log('Gas Level: ' + carObj.gas + ' %');
};

// drive the car
function driveCar(carObj, cityDistance) {
  if (carObj.gas < cityDistance) {
    fillUpGas(carObj);
    return console.log('Needed Gas!');
  }
    carObj.city = getDestination(carObj);
    carObj.gas -= cityDistance;
    console.log("Drove to " + carObj.city + "   Remaining gas: " + carObj.gas);
    return carObj.city;
};

// drop off passengers
function dropOffPassengers(carObj) {
  var oldNum = carObj.passenger;
  carObj.passenger -= 0;
  console.log('Dropped off ' + oldNum + " passengers");
  return oldNum;
};

// car action function
function carAct(carObj) {
  var distanceBetweenCities = 50;

  if (carObj.gas < 20) {
    fillUpGas(carObj);
  } else if (carObj.passenger < 3) {
    addPassengers(4, carObj);
  } else {
    if (carObj.gas < distanceBetweenCities) {
      fillUpGas(carObj);
    }
  };

  droveTo = driveCar(carObj, distanceBetweenCities);
  passengers_dropped = dropOffPassengers(carObj);
  return 'Drove to ' + droveTo + " dropped off " + passengers_dropped + " people.";
};

// display my fleet of cars
function commandFleet(carArray) {
  for (var i = 0; i < carArray.length; i++ ) {
    var action = carAct(carArray[i]);
    console.log('Car' + (i + 1) + ": " + action);
  };
};

// add cars per day function
function addOneCarPerDay(cars, numDays) {
  for ( var i = numDays; i > 0; i-- ) {
    var newCar = getNewCar('London', 0);
    addCar(newCar);
    commandFleet(cars);
  }
}

var car1 = getNewCar('Toronto', 0);
var car2 = getNewCar('London', 0);
var car3 = getNewCar('Toronto', 0);
addCar(car1);
addCar(car2);
addCar(car3);
getDestination(car1);
console.log(carArray);
addPassengers(4, car1);
console.log(car1);
var x = getDestination(car1);
console.log(x);
fillUpGas(car1);
showGas(car1);
driveCar(car1, 100);
dropOffPassengers(car1);
carAct(car1);
console.log('----------');
commandFleet(carArray);
addOneCarPerDay(carArray, 10);

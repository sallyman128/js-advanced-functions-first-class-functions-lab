// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
  return arrayOfDrivers.slice(0,2);
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
  return arrayOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fare) => {
    return fare * multiplier;
  }
}

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, operator) {
  return operator(arrayOfDrivers);
}
//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Generate random integer between two values inclusive min and exclusive of max

function generateIntegerRangeExclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
  //The maximum is exclsuive and the minimum is inclusive
}

//Generate random integer between two values inclusive min and inclusive of max

function generateIntegerRangeInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

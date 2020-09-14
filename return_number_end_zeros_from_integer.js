//Return number of end zeros from integer

function returnEndZeros(value) {
  let count = 0;

  let segmentedValue = value.toString().split("").reverse();

  for (let index = 0; index < segmentedValue.length; index++) {
    if (segmentedValue[index] == "0") {
      count++;
    } else {
      break;
    }
  }

  return count;
}

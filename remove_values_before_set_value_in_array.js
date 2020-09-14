/*Take an array values and a number b and remove all entries before this in array unless empty or cannot find a cut point.*/

function removeAllBefore(values, b) {
  // Exit if empty array
  if (values.length == 0) {
    return values;
  }

  //Mark cutting point if possible
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] == b) {
      break;
    } else {
      count++;
    }
  }

  //return same array if no cutting point can be found eg if all values the same
  if (count == values.length) {
    return values;
  } else {
    let newList = values.slice(count); //cut old array to create new and return
    return newList;
  }
}

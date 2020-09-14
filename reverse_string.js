//Reverse a given string

function reverseString(text) {
  let reversedSegment = text.split("").reverse(); //convert to reversed array
  return reversedSegment.join(""); //rejoin as string without separators
}

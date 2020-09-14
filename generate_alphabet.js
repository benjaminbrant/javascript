//Generate lower case alphabet

function generateAlphabetLower() {
  let alphabet = [];

  for (let index = 97; index <= 122; index++) {
    alphabet.push(String.fromCharCode(index));
  }

  return alphabet;
}

//Generate upper case alphabet

function generateAlphabetUpper() {
  let alphabet = [];

  for (let index = 65; index <= 90; index++) {
    alphabet.push(String.fromCharCode(index));
  }

  return alphabet;
}

//Return capital letters secret message from string without any punctuation

function findMessage(data) {
    
    let secret = "";
    
    let result = data.split(' ');
    
    result.forEach(function(element) {
    
        let word = element.split('');

        word.forEach(function(char) {
            if (char.charAt(0).match(/[a-z]/i) && (char.charAt(0) === char.charAt(0).toUpperCase()))
            {
            secret += char.charAt(0);
            }
        });
    
    });
    
    return secret;
}
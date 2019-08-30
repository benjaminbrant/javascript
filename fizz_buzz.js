function fizzBuzz(data) {
    let result = undefined;
    
    switch (true)
    {
        case (data === 0):
            result = data.toString();
            break;
        case ((data % 3 === 0 && data % 5 === 0)):
            result = "Fizz Buzz";
            break;
        case (data % 3 === 0):
            result = "Fizz";
            break;
        case (data % 5 === 0):
            result = "Buzz";
            break;
        default:
            result = data.toString();
            break;
    }
    
    return result;
}
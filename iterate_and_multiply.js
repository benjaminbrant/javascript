function digitsMultip(data) {
    let result = data.toString().split('').map(Number);

    let total= 1;
    
    for (let i = 0; i < result.length; i++)
    {
        if(result[i] > 0)
        {
            total = total * result[i];
        }
        
    }
    
    return total;
}
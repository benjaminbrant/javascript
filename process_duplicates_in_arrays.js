
//Returns only duplicate values in array

function onlyDuplicates(data)
{
	let duplicates = [];

	for(let i = 0; i < data.length; i++)
    {
        if ((data.lastIndexOf(data[i]) > i || data.indexOf(data[i]) < i))
        {
            duplicates.push(data[i]);
        }
    }
    
    return duplicates;
}

//Returns only non duplicates from array

function  onlyNonDuplicates(data)
{
	let nonDuplicates = [];

	for(let i = 0; i < data.length; i++)
    {
        if (!(data.lastIndexOf(data[i]) > i || data.indexOf(data[i]) < i))
        {
            nonDuplicates.push(data[i]);
        }
    }
    
    return nonDuplicates;
}
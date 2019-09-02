//Return second iindex of search term from string

function indexOfSecond(string, searchTerm)
{
    let indexOfFirst = string.indexOf(searchTerm);

    if (indexOfFirst === -1)
    {
        return undefined;
    }
    else
    {
        let indexOfSecond = string.indexOf(searchTerm, (indexOfFirst + 1));

        if (indexOfSecond === -1)
        {
            return undefined
        }
        else
        {
            return indexOfSecond;
        }
    }
}
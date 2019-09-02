//Correct sentence with initial capital and trailing period if needed

function correctSentence(sentence)
{
    sentence = sentence.trim();

    let firstChar = sentence.charAt(0);
    
    if (firstChar !== firstChar.toUpperCase())
    {
        sentence = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());
    }
    
    let lastChar = sentence.charAt((sentence.length - 1));
    
    if (lastChar !== ".")
    {
        sentence = sentence + ".";
    }
    
    return sentence;
}
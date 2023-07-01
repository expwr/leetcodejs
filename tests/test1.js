var reverseString = function(string) {
    const words = string.split(' ');

    const reversedWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence
}

const string = "Hello how are you today.";
console.log(reverseString(string));
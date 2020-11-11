"use strict";

/* Takes in two strings (word and letters) and returns true or false
    True - if the number of letters can be combined to create the word
    False - if not
    */

function canConstructWord(word, letters) {
    if (letters.length < word.length) return false;
    if (word.length === 0) return true;

    let wordFreq = createFreqCounter(word);
    let lettersFreq = createFreqCounter(letters);

    for (let char of wordFreq.keys()) {
        if (!lettersFreq.has(char)) return false;
        if (lettersFreq.get(char) < wordFreq.get(char)) return false;
    }
    return true;
}

/* Helper function: creates a frequency counter from a string */
function createFreqCounter(string) {
    let frequencies = new Map();

    for (let char of string) {
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount + 1);
    }
    return frequencies;
}

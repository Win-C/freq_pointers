"use strict";

/* Takes in two strings (word and letters) and returns true or false
    True - if the word can be built by the letters
    False - if not
    */

function canConstructWord(word, letters) {
    let wordFreq = createFreqCounter(word);
    let lettersFreq = createFreqCounter(letters);

    if(letters.length<word.length) return false;

    if(word.length===0) return true;

    for(let char of wordFreq.keys()){
        if(!lettersFreq.has(char)) return false;
        if(lettersFreq.get(char)<wordFreq.get(char)) return false;
    }
    return true;
}

/* Helper function: creates a frequency counter from a string */
function createFreqCounter(string){
    let frequencies = new Map();

    for(let char of string){
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount + 1);
    }

    return frequencies;
}

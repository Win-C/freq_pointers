"use strict";
/*Takes in two integers
Returns true if the frequencies of digits are the same*/
function sameFrequency(integer1, integer2) {
    let integer1Freq = createFreqCounter(integer1);
    let integer2Freq = createFreqCounter(integer2);
    for (let digit of integer1Freq.keys()) {
        if (!integer2Freq.has(digit)) return false;
        else if (integer1Freq.get(digit) !== integer2Freq.get(digit)) {
            return false;
        }
    }
    return true;
}

/* takes an integer, returns frequecy of digits as a map */
function createFreqCounter(integer) {
    let freq = new Map();
    let digits = `${integer}`; //convert to string or array of digits
    for (let digit of digits) {
        let count = (freq.get(digit) || 0);
        freq.set(digit, count + 1);
    }
    return freq;
}

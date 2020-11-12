"use strict";
/* Accepts two strings and checks whether the characters in the first string form a sub-sequence of the characters in the second string. */
function isSubsequence(subString, mainString) {
    if (subString.length > mainString.length) return false;
    let mainIndex = 0;
    let subIndex = 0;
    while (subIndex < subString.length) {
        if (subString[subIndex] === mainString[mainIndex]) {
            subIndex++;
            mainIndex++;
        }
        // if the characters aren't equal, keep searching
        else {
            if (mainIndex < mainString.length - 1) {
                mainIndex++;
            }
            else {
                return false;
            }
        }

    }
    return true;
}


isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting');        // true
isSubsequence('abc', 'abracadabra');   // true
isSubsequence('abc', 'acb');           // false (order matters)

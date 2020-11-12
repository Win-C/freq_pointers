"use strict";

/* Takes in an array of integers and a target number.
    Returns the number of pairs that sum to the target number */
function countPairs(integers, targetSum) {
    let count = 0;
    let setIntegers = new Set(integers);

    for(let num of integers){
        let findValue = targetSum - num;
        if(setIntegers.has(findValue)&&num!==findValue){
            count++;
            setIntegers.delete(findValue);
            setIntegers.delete(num);
        }
    }

    return count;
}




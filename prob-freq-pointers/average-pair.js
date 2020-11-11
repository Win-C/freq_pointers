"use strict";
/* Given a sorted aray of integers and a target average,
return true if there are at least one pair of numbers that averages to the target. Otherwise return false. */
function averagePair(integers, targetAverage) {
    let leftPointer = 0;
    let rightPointer = integers.length - 1;
    while (leftPointer < rightPointer) {
        let testAverage = (integers[leftPointer] + integers[rightPointer]) / 2;
        if (testAverage === targetAverage) {
            return true;
        }
        else if (testAverage > targetAverage) {
            rightPointer--;
        }
        else {
            leftPointer++;
        }
    }
    return false;
}

"use strict";

/* Takes in an array of non-zero integers.
    Returns the mutated array with positive integers to the left and negative integers to the right. Returned array might not be sorted. */
function separatePositive(integers) {
    let left = 0;
    let right = integers.length-1;

    while(left<right){
        if((integers[left]<0)&&(integers[right]>0)){
            [integers[left], integers[right]] = [integers[right], integers[left]];
        } else {
            if(integers[right]<0){
                right--;
            }
            if(integers[left]>0){
                left++;
            }
        }
    }
    return integers;
}


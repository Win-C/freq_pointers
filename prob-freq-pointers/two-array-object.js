"use strict";

/* Taking in two arrays (keys and values) and returning an object using the array as key value pairs */
function twoArrayObject(keys, values) {
    let keysToValues = {};

    for(let i=0; i<keys.length; i++){
        if(values[i] === undefined) {
            keysToValues[keys[i]] = null;
        } else {
            keysToValues[keys[i]] = values[i];
        }
    }

    return keysToValues;
}

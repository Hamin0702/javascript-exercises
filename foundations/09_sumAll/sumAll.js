const sumAll = function(a,b) {

    //if (typeof a !== "number" || typeof a !== "number") return 'ERROR'
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    if (a < 0 || b < 0) return 'ERROR'


    let min = Math.min(a,b);
    let max = Math.max(a,b);

    let result = 0;

    while (min <= max) {
        result += min;
        min++;
    } 

    return result;
};

// Do not edit below this line
module.exports = sumAll;

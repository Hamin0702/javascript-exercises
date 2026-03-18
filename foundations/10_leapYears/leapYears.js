const leapYears = function(year) {
    
    // if (year % 4 === 0) {
    //     if (year % 100 === 0 && year % 400 !== 0) {
    //         return false;
    //     }
    //     return true;
    // }
    // return false;

    // switch (true) {
    //     case (year % 100 === 0 && year % 400 !== 0):
    //         return false;
    //     case (year % 4 === 0):
    //         return true;
    //     default:
    //         return false;
    // }

    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    return isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)

};

console.log(leapYears(1996))
console.log(1996 % 4)
// Do not edit below this line
module.exports = leapYears;

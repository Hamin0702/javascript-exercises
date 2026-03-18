const removeFromArray = function(array, ...remove) {

    let result = [...array]
    for (let i = 0; i < remove.length; i++) {

        result = result.filter(item => item !== remove[i])

    }
    return result
};

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;

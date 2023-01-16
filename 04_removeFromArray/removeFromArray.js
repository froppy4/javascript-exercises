const removeFromArray = function(array, ...args) {
    let filteredArray = array;
    for (arg of args){
        filteredArray = filteredArray.filter(function(x) {
            return x !== arg;
        })
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

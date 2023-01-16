const reverseString = function(string) {
    let strArray = string.split("");
    let revStrArray = []
    for (let i = 0; i < strArray.length; i++){
        revStrArray[i] =  strArray[strArray.length-1-i];
    }
    let revString = revStrArray.join("")
    return revString
};

// Do not edit below this line
module.exports = reverseString;

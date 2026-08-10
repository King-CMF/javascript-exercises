const reverseString = function(string) {
    let Anon = ""
    for (i = string.length -1; i >= 0; i--){
        Anon = Anon + string[i]
    }
    return Anon
};

// Do not edit below this line
module.exports = reverseString;

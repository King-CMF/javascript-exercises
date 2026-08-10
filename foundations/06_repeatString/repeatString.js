const repeatString = function(string, num) {
    let x = ""
    for (let i = 0; i != num; i++ ){
        if (num < 0){
            return("ERROR")
            break
        }
        x = x + string
    }
    return x

};

// Do not edit below this line
module.exports = repeatString;

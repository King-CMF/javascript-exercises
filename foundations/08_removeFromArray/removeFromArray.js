const removeFromArray = function(array, ...num) {
    let array2 = []
    for (let x of array){
        if (!num.includes(x)){
            array2.push(x)
        }
    }
    return array2
};

// Do not edit below this line
module.exports = removeFromArray;

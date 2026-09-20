const fibonacci = function(num) {
    num = Number(num)
    
    if (num < 0){
        return "OOPS"
    } else if (num == 1){
        return 1
    } else if (num == 2){
        return 1
    } else if (num == 0){
        return 0
    }

    let na = 0
    let a = 0
    let s = 1

    for (let i = 0; i <= num - 1; i++){
        na = a + s
        s = a
        a = na
    }
    return na 
};

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(num1, num2) {
    if (typeof num1 != "number" ||
         typeof num2 != "number" ||
          num1 < 0 || num2 < 0 ||
           num1 % 1 != 0 || num2 % 1 != 0 ){
        return "ERROR"
    } else {
            let num = 0
            if (num1 < num2){
                for (let i = num1; i <= num2; i=i+1){
                     num = num + i
                    }
                } else if (num2 < num1){
                    for (let i = num2; i <= num1; i++){
                        num = num + i
                    }
                }
                return num
            }
};

// Do not edit below this line
module.exports = sumAll;

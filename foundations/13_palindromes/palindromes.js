const palindromes = function (word) {
    let arr = ["!","?",",","."," "];

    let backward = "";
    let forward = word.trim().toLowerCase();
    let length = forward.length;

    for (let i = length - 1; i >= 0; i--){
        if (!arr.includes(forward[i])){
            backward = backward + forward[i]
        }

        if (arr.includes(forward[i])){
            forward = forward.replace(forward[i], "")
        }
    }


    if (backward == forward){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;

const getTheTitles = function(books) {
    titles = []
    length = books.length

    for (let i = 0; i <= length - 1; i++){
        x = books[i].title
        titles.push(x)
    }
    return titles

};

// Do not edit below this line
module.exports = getTheTitles;

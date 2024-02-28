const getTheTitles = function(books) {
    let arr = [];
    let dim = books.length;
    for(let i=0;i<dim;i++){
        arr[i]=books[i]["title"];
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;

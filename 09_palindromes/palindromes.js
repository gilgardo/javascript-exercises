const palindromes = function (string) {
    string = string.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();
    let arr = Array.from(string);
    let arrReverse = Array.from(string).reverse();
    dim = arr.length;
    for (let i = 0; i < dim; i++) {
        if (arr[i] !== arrReverse[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

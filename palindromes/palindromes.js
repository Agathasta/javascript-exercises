const palindromes = function (str) {
    newStr = str.toLowerCase().split("").filter((elem) => elem.match(/^[A-Za-z]+$/));
    return newStr.join("") === newStr.reverse().join("");
}

module.exports = palindromes
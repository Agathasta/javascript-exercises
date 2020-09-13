const caesar = function (str, num) {
    let asciiNum = [];
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        asciiNum = str.charCodeAt(i) + num;
        newStr.push(String.fromCharCode(asciiNum))
    }
    return newStr.join("");
}

module.exports = caesar

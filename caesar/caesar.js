const caesar = function (str, num) {
    let asciiNum = [];
    let newStr = [];
    alphaPlus = num > 26 ? Math.ceil(num / 26) * 26 : 26;
    alphaMinus = num < -26 ? Math.floor(-num / 26) * 26 : 26;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {                         // ASCII between 65 and 90
            asciiNum = str.charCodeAt(i) + num;
            if (num > 0 && asciiNum >= 91) {
                asciiNum = asciiNum - alphaPlus;
            } else if (num < 0 && asciiNum <= 64) {
                asciiNum = asciiNum + alphaMinus;
            }
        } else if (str[i].match(/[a-z]/)) {                  // ASCII between 97 and 122
            asciiNum = str.charCodeAt(i) + num;
            if (num > 0 && asciiNum >= 123) {
                asciiNum = asciiNum - alphaPlus;
            } else if (num < 0 && asciiNum <= 96) {
                asciiNum = asciiNum + alphaMinus;
            }
        } else {                                             // not a character, keep as it is
            asciiNum = str[i];
        }
        if (typeof (asciiNum) == "number") {
            newStr.push(String.fromCharCode(asciiNum))
        } else {
            newStr.push(asciiNum);
        }
    }
    return newStr.join("");
}

module.exports = caesar
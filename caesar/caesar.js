const caesar = function (str, num) {
    let asciiNum = [];
    let newStr = [];
    // for large shift factors
    alphaPlus = num > 26 ? Math.ceil(num / 26) * 26 : 26;
    alphaMinus = num < -26 ? Math.floor(-num / 26) * 26 : 26;

    for (let i = 0; i < str.length; i++) {

        if (str[i].match(/[A-Z]/)) {    // Uppercase: ASCII between 65 and 90
            asciiNum = str.charCodeAt(i) + num;
            if (num > 0 && asciiNum > 90) {
                asciiNum = asciiNum - alphaPlus;
            } else if (num < 0 && asciiNum < 65) {
                asciiNum = asciiNum + alphaMinus;
            }
            newStr.push(String.fromCharCode(asciiNum))

        } else if (str[i].match(/[a-z]/)) {     // Lowercase: ASCII between 97 and 122
            asciiNum = str.charCodeAt(i) + num;
            if (num > 0 && asciiNum > 122) {
                asciiNum = asciiNum - alphaPlus;
            } else if (num < 0 && asciiNum < 97) {
                asciiNum = asciiNum + alphaMinus;
            }
            newStr.push(String.fromCharCode(asciiNum))

        } else {    // not a character, keep as it is
            asciiNum = str[i];
            newStr.push(asciiNum);
        }
    }
    return newStr.join("");
}

module.exports = caesar
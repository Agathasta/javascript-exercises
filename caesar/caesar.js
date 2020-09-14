const caesar = function (str, num) {
    let asciiNum = [];
    let newStr = [];
    const shift = num % 26

    for (let i = 0; i < str.length; i++) {




        if (str[i].match(/[A-Z]/)) {    // Uppercase: ASCII between 65 and 90
            asciiNum = str.charCodeAt(i)
                ;
            if (shift > 0 && asciiNum + shift > 90) {
                asciiNum = 64 + (shift - (90 - asciiNum));
            } else if (shift < 0 && asciiNum + shift < 65) {
                asciiNum = (91 + shift) + (asciiNum - 65);
            } else {
                asciiNum += shift;
            }
            newStr.push(String.fromCharCode(asciiNum))

            // } else if (clearText[i].match(/[a-z]/)) {     // Lowercase: ASCII between 97 and 122
            //     asciiNum = clearText.charCodeAt(i);
            //     if (shift > 0 && (asciiNum + shift) > 122) {
            //         asciiNum = 64 + (shift - (90 - asciiNum));
            //     } else if (shift < 0 && (asciiNum + shift) < 97) {
            //         asciiNum = (91 + shift) + (asciiNum - 65);
            //     } else {
            //         asciiNum += shift;
            //     }
            //     newStr.push(String.fromCharCode(asciiNum))


        } else if (str[i].match(/[a-z]/)) {     // Lowercase: ASCII between 97 and 122
            asciiNum = str.charCodeAt(i);
            if (shift > 0 && asciiNum + shift > 122) {
                asciiNum = 64 + (shift - (90 - asciiNum));
            } else if (shift < 0 && asciiNum < 97) {
                asciiNum = (91 + shift) + (asciiNum - 65);
            } else {
                asciiNum += shift;
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

const repeatString = function (word, number) {
    let string = "";
    if (number >= 0) {
        for (let i = 1; i <= number; i++) {
            string += word;
        }
    } else {
        string = "ERROR";
    }
    return string;
}

module.exports = repeatString


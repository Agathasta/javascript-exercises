

const removeFromArray = function (arr, ...args) {
    let argsArray = Array.from(args);
    let pos, newArr;
    for (let i = 0; i < argsArray.length; i++) {
        if (arr.indexOf(argsArray[i]) != -1) {
            pos = arr.indexOf(argsArray[i]);
            newArr = arr.splice(pos, 1);
        }
    }

    return arr;
}

module.exports = removeFromArray

const fibonacci = function (max) {
    if (max > 0) {
        const fibo = [1, 1]
        for (i = 2; i <= max; i++) {
            fibo.push((fibo[i - 1]) + (fibo[i - 2]));
        }
        return fibo[max - 1];
    } else {
        return "OOPS";
    }
}

module.exports = fibonacci

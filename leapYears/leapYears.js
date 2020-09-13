/*  Leap years are divisible by four. 
    Leap years are NOT divisible by 100 unless they are divisible by 400.*/


const leapYears = function (year) {
    if ((year % 100 == 0) && (year % 400 != 0)) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears

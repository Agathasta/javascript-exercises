

let findTheOldest = function (pax) {
    return pax.reduce((older, current) => {
        const olderAge = getAge(older.yearOfDeath, older.yearOfBirth);
        const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
        return olderAge > currentAge ? older : current;
    })
}
function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
module.exports = findTheOldest





// let findTheOldest = function (pax) {
//     let alive;
//     for (i = 0; i < pax.length; i++) {
//         if (pax[i].hasOwnProperty("yearOfDeath")) {
//             alive = false;
//         } else {
//             const date = new Date();
//             pax[i].yearOfDeath = date.getFullYear();
//             alive = true;
//             i = pax.length;
//         }
//     }
//     if (alive) {
//         pax.sort(function (a, b) {
//             const ageA = a.yearOfDeath - a.yearOfBirth;
//             const ageB = b.yearOfDeath - b.yearOfBirth;
//             return ageA > ageB ? -1 : 1;
//         });
//         return pax[0];
//     } else {
//         return "All are dead";
//     }
// }
// module.exports = findTheOldest


// // PASSES 1ST TEST!

// let findTheOldest = function (pax) {
//     pax.sort(function (a, b) {
//         const ageA = a.yearOfDeath - a.yearOfBirth;
//         const ageB = b.yearOfDeath - b.yearOfBirth;
//         return ageA > ageB ? -1 : 1;
//     });
//     return pax[0];
// }

// module.exports = findTheOldest
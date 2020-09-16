
const getTheTitles = function (array) {
    return array.map(book => book.title)
}
module.exports = getTheTitles;




// v. 1.0.

// const getTheTitles = function (array) {
//     let titles = []
//     for (i = 0; i < array.length; i++) {
//         titles.push(array[i].title);
//     }
//     return titles;
// }
// module.exports = getTheTitles;

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

const getTheTitles = function () {
    let titles = []
    for (i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
}
module.exports = getTheTitles;

// function orderBooks <T> (firstBook, secondBook):T {
//     return firstBook + secondBook ;
// }
// orderBooks(2,3);
function orderBooks(firstBook, secondBook) {
    var result = {};
    for (var prop in firstBook) {
        if (firstBook.hasOwnProperty(prop)) {
            result[prop] = firstBook[prop];
        }
    }
    for (var prop in secondBook) {
        if (secondBook.hasOwnProperty(prop)) {
            result[prop] = secondBook[prop];
        }
    }
    return result;
}
//orderBooks(2, 3);
var MysteryBooks = /** @class */ (function () {
    function MysteryBooks(name) {
        this.name = name;
    }
    return MysteryBooks;
}());
var FashionBooks = /** @class */ (function () {
    function FashionBooks() {
    }
    FashionBooks.prototype.buy = function (data) {
        console.log(data);
    };
    return FashionBooks;
}());
orderBooks(new MysteryBooks("mystery"), FashionBooks.prototype);

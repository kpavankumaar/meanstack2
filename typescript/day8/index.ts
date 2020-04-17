// function orderBooks <T> (firstBook, secondBook):T {
//     return firstBook + secondBook ;
// }

// orderBooks(2,3);
function orderBooks<First, Second>(firstBook: First, secondBook: Second): First & Second {
    const result = {};
    for(const prop in firstBook){
        if(firstBook.hasOwnProperty(prop)){
            (result as First)[prop] = firstBook[prop];
        }
    }
    for(const prop in secondBook){
        if(secondBook.hasOwnProperty(prop)){
            (result as Second)[prop] = secondBook[prop]
        }
    }
     return result as First & Second;
}

//orderBooks(2, 3);

class MysteryBooks {
    constructor(public name: string){}

}
class FashionBooks {
    buy(data){
        console.log(data)
    }
}

const bookData = orderBooks(new MysteryBooks("mystery"), FashionBooks.prototype)

bookData.buy("shoes");

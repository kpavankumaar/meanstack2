// const num = 10; // primitive data types 
// const classRoom = {
//      name: "typescript"
// }
// classRoom.name = "understanding ES6";
// // classRoom = {
// //     name : "typescript - day2"
// // }
// const playAGame = function(){

// }
// playAGame()
// const product = [{ category: "mobile", brand: "Apple" }, { category: "mobile", brand: "Samsung" }];

// product = [];
// product[0].category = "data";

// Arrow Functions 
// runTheCode(10);
//console.log(name);
let name = "ravi";
const runTheCode =  data => data*2 ;

const identifyThisKW = () => {
    console.log(this);
}

function identifyThisKWNormalFn (){
    console.log(this);
}

console.log(this)
let company = {
    details: () => {
        console.log(this);
    },
    run: function() {
        console.log(this);// company
        (() => {
            console.log(this); //company
        })()
    }
}
function test(){
    let data = 10;
    return function(){
        console.log(data);
    }
}
test()();
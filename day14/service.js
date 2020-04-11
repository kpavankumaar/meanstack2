//multiplesOf2(9);   
var arr = [1, 2, 3, 4]; 
var arr1 = arr.map(function(item){
    return item * 2 ;
    //console.log(item);
    // if (item > 2) {
    //     return item;
    // }
});
console.log(arr);   
var filteredArr = arr.filter(function(item){
    if(item > 2){
        return item;
    }
    
})

var reducedSum = arr.reduce(function(prevVal, currentVal, index, arra){
    return prevVal + currentVal;
})
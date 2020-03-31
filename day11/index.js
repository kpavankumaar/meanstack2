

var url = "https://jsonplaceholder.typicode.com/posts";
var headers = new Headers({"content-type":"application/json"});
var req = new Request(url, headers );
var getUrlData = fetch(url, {headers:headers});
getUrlData.then(function(response){
    console.log("data from fetch");
    response.json().then(function(data){
        console.log(data);
    })
})
.catch(function(err){   
    console.log(err);
})


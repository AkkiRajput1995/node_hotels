function callback(){
    console.log("Akash is a leader");
}


const add=function (a,b,callback){
var result=a+b;

    console.log('result+ '+result);
    callback();
}

add(3,4, () => console.log("aaaaaaaaaaaa"));
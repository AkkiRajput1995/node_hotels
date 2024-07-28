var fs=require('fs');
var os=require('os');

var user =os.userInfo();
console.log(user);


fs.appendFile('greting.txt','My Name is Akash Singh', ()=>{
    console.log("File created")
});
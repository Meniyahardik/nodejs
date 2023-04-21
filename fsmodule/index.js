const  fs = require("fs"); 
//non-blocking io module
// fs.writeFile("file.txt", "Data is added to file", ()=>{
//     console.log("data is successfully adde"); 
// })
const a = fs.writeFileSync("file2.txt", "data enter");
console.log(a) ;
console.log("simplyis subscribe"); 

fs.readFile("file.txt","utf-8",(err, data)=>{
    console.log(data); 
} )


fs.appendFile("file.txt", "new data to store in data base", (err)=>{
    console.log(err); 
})

fs.rename("file.txt", "hardik.txt",(err)=>{
    console.log(err)
});
fs.unlinkSync("hardik.txt"); 

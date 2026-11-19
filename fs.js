const { create } = require('domain')
const fs=require('fs')
fs.writeFile("std.text","Name:Ayush",(err)=>{
   if(err){
    console.log(err)
   }
   else{
    console.log("file created")
   }
})
// fs.appendFile(
//     "std.txt",
// )
// c:create write file
// u:update append file
// r:read file
// D:delete unlink(file name,call back) 
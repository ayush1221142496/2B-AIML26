const EventEmitter = require("events");
const ud = new EventEmitter();

ud.on("greet", (name) => {
  console.log(`Hello there 2B${name}`);
});

ud.on("exit", (code) => {
  console.log(`Exiting with code ${code}`);
});

ud.emit("greet", "Ayush");
ud.emit("exit", 0);


// const EventEmitter =require("event")
// const b=new EventEmitter()
// b.on('greet',(name)=>{
//      console.log(`welcome to class B`+name)
// });
// b.on("exit",(num)=>{
//   console.log(`thanks for visit ${num}`);
// });
//   b.emit("greet","Ayush");
//   b.emit("exit",0)
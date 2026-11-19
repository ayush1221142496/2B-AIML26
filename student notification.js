const B=require('events')
const obj=new B
obj.on('event', (name,rollNo) => {
    console.log(`Welcome to class ${name}`);
    console.log(`Welcome to class ${rollNo}`);
}
);
obj.emit('event','Ayush','101')
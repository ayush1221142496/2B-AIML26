const EventEmitter = require('events');
class Button extends EventEmitter{
    click(){  //method prepare
        this.emit('click');
    }
}
const button = new Button();
button.on('click',()=>{
    console.log("this button has been clicked");
});
button.click();      //click ko call kiya hai
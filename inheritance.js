class Hello{
    constructor(){
        console.log("Hello Constructor");
    }
}
class Hi extends Hello{
    constructor(){
        super();
        console.log("Hi constructor");
    }
}

// let h1 = new Hello(); 
//    info(){

//     console.log("info Hello")
//    }
// }
// class Hi extends Hello(){
//     info(){
//         super.info();
//         console.log("infoHi");
//     }
// }
// let h1=new Hi();
// h1.info();

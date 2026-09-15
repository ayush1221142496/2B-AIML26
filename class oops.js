// class Hello{
    
//     // constructor(){
//     //     this.faculty="Ayush";
//     //     console.log("Hello Constructor");
//     // }
// }
//     let h=new Hello();
//     console.log(h.faculty);
//  class Hello{
//     faculty="Ayush";  //class label  variable
//  }
//  let h=new Hello()
//  console.log(h.faculty);

 class Student{
    constructor(RollNo,Name,Year){
        this.RollNumber=RollNo;
        this.Name=Name;
        this.Year=Year;
    
    console.log(this.RollNo);
    console.log(this.Name);
    console.log(this.Year);
    }
 }
const s1 = new Student(1, "Ayush",3 )


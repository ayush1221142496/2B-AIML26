class Student{
    static count=0;

    constructor(name,rollnumber,marks){
        this.name=name;
        this.rollnumber=rollnumber;
        this.marks=marks;
        Student.count++;
    }
    display(){
        console.log(this.name);
         console.log(this.rollnumber);
          console.log(this.marks);

        if(this.marks>=35)
{
    console.log("Pass");
}    
  else{
    console.log("Fail");
  }
}
}
let s1=new Student("Ayush",101,75)
let s2=new Student("Virat Kohli",123,95)
s1.display();
// console.log(Student.count);      
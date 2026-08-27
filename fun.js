function student(name, pincode, rollNo,city) {
    this.name=name;
    this.rollNo=rollNo;
    this.city=city;
    this.display=function(){
        console.log(this.name);
    }
}
let s1=new student("ayush",208001,56,"kanpur");
let s2=new student("ayush",201009,86,"ghaziabad");
s1.display();
s2.display();

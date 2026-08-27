let student={
    first:"Ayush",
    second:"Sharma",
    City:"Ghaziabad",
    Pincode:201009,
    subject: ["C++", "JavaScript","Web Dev"],

    salary:function(){
    console.log("salary");   
    }
};
console.log(student.first);
console.log(student.second);
console.log(student.city);
console.log(student.pincode);
student.salary();
console.log(student.subject[0]);
console.log(student.subject[1]);
console.log(student.subject[2]);
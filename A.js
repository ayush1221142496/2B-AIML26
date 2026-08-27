console.log("====Variables====");
let text="Something";
console.log(text);

// //if - else
    console.log("====if else====");
let a=40;
let b=30;
if(a<b){
    console.log("B is greater,value of a=",a);
}
else{
    console.log("B is greater,value of b=",b);
}

// //function
console.log("====function====");
function abes(){
    console.log("Welcome Students");
}

// //function parameters
console.log("====function parameters====");
   function greet(fname,lname){
    console.log("hello",fname,lname);
   }
   greet("utkarsh","dixit");
   greet("waseem","sir");

//    //function return
   console.log("===function return===")
   function add(x,y){
    return x+y;
   }
   let result=add(20,10);
   console.log("sum=",result);

//    //default arguements
   console.log("===program===");
     function fullname(fname="abes",lname="engineering college"){
        return fname+" "+lname;
     }
     console.log(fullname());
     console.log(fullname("ayush","sharma"));

     //percentage program
     console.log("===percentage program===");
      function percentage(math, english,hindi) {
          return ((math + english+ science) / 300) * 100;
      }
      let total=totalMarks(80,45,59);
      let percent=percentage(80,45,90);
      console.log("totalMarks=",total);
      console.log("percentage=",percentage(80, 45, 59)+ "%");

      //array
      console.log("===array===");
       let arr=[2,1,5,4,7];
       let sum=0;
       for(let index=0;index<arr.length;index++){
        console.log(arr[index]);
        sum+=arr[index];
       }
       console.log("total=",sum);

    //2D array
        console.log("===2D array===");
        let students=[
            ["ayush","male","btech"],
            ["aditya","male","mca"]
        ];
        for(let row=0;row<students.length;row++){
            for(let column=0;column<students.length;column++){
        console.log(students[row][column]);
            }
        }

        //object
        const student={
            id:101,
            name:"ayush",
            course:"Node.js"
        };
        console.log(student); 
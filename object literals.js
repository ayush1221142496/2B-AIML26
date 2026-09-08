// let name="Ayush"
// let rollnumber=102
// let data={
//     name,
//     rollnumber,
// }
// console.log(data.name);
// console.log(data.rollnumber);

// let F="firstname"
// let L="lastname"
// let data={
//    [F]:"Ayush",    
//    [L]:"Sharma",
// }
// console.log(data.firstname);
// console.log(data.lastname);

let f="first"
let l="last"
let data={
   [f]:"Ayush",
   [l]:"Sharma",
   'Detailshow'(){
    console.log(this.first);
    console.log(this.last);
  }
}
//   console.log(data['show']());
    console.log(data['Detailshow']());
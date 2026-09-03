let firstname="Virat"
let lastname="Kohli"
// console.log(`My firstname is ${firstname}`);
// console.log(`My firstname is: ${firstname}${lastname}`);
// function fullname(firstname,lastname){
//       console.log(firstname);
//     console.log(lastname);
// }
// fullname("Ayush","Sharma")
function fullname(first,last){
    return `${first} ${last}`
}
let name=`hell ${fullname(firstname,lastname)}`;
console.log(name);
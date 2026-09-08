// function sum(...values) {
//     let total = 0;
//     for (let n of values) {
//         total = total + n;
//     }
//     return total;
// }

// console.log(sum(10, 20, 30));
// function sum(firstName, lastName, ...value) {
//     console.log(firstName);
//     console.log(lastName);
//     console.log(value);
// }

// sum("Ayush", "Sharma", 10, 20);

//  sum(firstname,lastname,...value)
function  sum(name,...value){
    let total=0;
    for(let n of value){
        total=total+n;
    }
    console.log("name:",name);
    console.log("total:",total);
}

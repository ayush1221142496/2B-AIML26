function sum(...values){
    let sum=0;
    for(let i in values){
        sum=sum+values[i];
    }
    console.log(sum);
};
let arr=[10,20,50,40];
sum(...arr);
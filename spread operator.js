 function sum(...values){
     let sum=0;
    for(let i in values){
        sum=sum+values[i];
    }
    console.log(sum);
};
let arr=[10,20,50,40];
sum(...arr);   //int prompt for single value store
               //int split for multiple value store
    var a1=[10,20,30]
    var a2=[40,50,10]
    var a3=[...a1,...a2]  
    console.log(a3);          
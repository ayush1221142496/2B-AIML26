function physics(marks){
     return `${marks}`
}
physics=(marks)=>`${marks}`;
fullname=(first,last)=>`${first}${last}`;
hello=()=>console.log("Hello Ayush");
hello();
//pattern arrow function
pattern=(n)=>{for(let i=0;i<n;i++){
             let row=" ";
             for(let j=0;j<=i;j++){
                row+="*";
             }
             console.log(row);
}
};
pattern(3);
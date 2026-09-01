//Online shopping Management System
console.log("===Product ID===")
let Product={
    ProductID:"202005",
    ProductName:"Desktop",
    Price:80000,
    Quantity:4,
}
function calculate(Price,Quantity){
    return (Product.Price)*(Product.Quantity)
}
function update(size){
    Product.Quantity=size
}
function display(){
    console.log(`Price:${Product.Price}`);
    console.log(`Product ID:${Product.ProductID}`);
    console.log(`Product Quantity:${Product.Quantity}`);
    console.log(`Product Name:${Product.ProductName}`);
}
display();
console.log(calculate);
update(5);
display();
console.log(calculate);

//Bank Account Management System

let Account={
    Account_HolderName:"Ayush Sharma",
    Account_Number:2445455132,
    Account_Balance:20000,
}
function Deposit(Account){
    Account.Account_Balance+=amount;
    console.log("Amount deposited successfully");
}
  function Withdraw(money){
        if(money>Account.Account_Balance){
            console.log("Insufficient Balance");
            return;
        }
        Account.Account_Number-=money;
        console.log(`${money} is debitted in your account`);
  }
  function display(){
    console.log("===Account Details===");
    console.log(`Account holder: ${Account.Account_HolderName}`);
    console.log(`Account Number: ${Account.Account_Number}`);
    console.log(`Account Balance: ${Account.Account_Balance}`);
}
display();

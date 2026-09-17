class Bankaccount{
    
    constructor(Accountnumber,holdername,balance){
        this.Accountnumber=Accountnumber;
        this.holdername=holdername;
        this.balance=balance;
    }
     deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal failed! Insufficient balance");
        } 
        else {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        }
    }

    displayBalance() {
        console.log("Account No:", this.Accountnumber);
        console.log("Holder Name:", this.holdername);
        console.log("Balance:", this.balance);
    }

    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Banking Information: Savings, deposits and withdrawals");
    }
}

Bankaccount.bankInfo();

let account1 = new Bankaccount(10151546, "Rahul", 500000);
let account2 = new Bankaccount(10245466, "Ayush", 8000);

account1.displayBalance();
account1.deposit(100000);
account1.withdraw(50000);
account2.displayBalance();
account2.deposit(500000);
account2.withdraw(1000);
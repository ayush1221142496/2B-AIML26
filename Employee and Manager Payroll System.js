class Employee{
    constructor(id,name,basicsalary){
        this.name=name;
        this.id=id;
        this.basicsalary=basicsalary;
    }
    calculatesalary(amount){
        return this.basicsalary;
    }
}
class manager extends Employee{
    constructor(id,name,basicsalary,incentive){
        super(id,name,basicsalary);
        this.incentive=incentive;
    }
    calculatesalary(){
        this.basicsalary+this.incentive;
    }
}
let Employee=new Employee(101,"Ayush",10000)
let manager=new manager(123,"mukesh",20000)
console.log("employee salary:");
Employee.calculatesalary();
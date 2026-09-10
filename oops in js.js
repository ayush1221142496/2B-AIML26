class student {
    static name;
    static rollnumber;

    constructor(name, rollnumber) {
        student.name = name;
        student.rollnumber = rollnumber;
        console.log(student.name);
        console.log(student.rollnumber);
    }

    static display() {
        console.log(student.name);
        console.log(student.rollnumber);
    }

    static hello() {
        console.log("hello ayush");
    }
}

const s1 = new student("Ayush", 101);
student.display();
student.hello();
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = [];
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
        student1.registerForCourses(this);
    }
    setInstructor(instructors) {
        this.instructors.push(instructors);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course1);
    }
}
const student1 = new Student("Saba", 18, 148);
const student2 = new Student("Aisha", 17, 78);
const instructor1 = new Instructor("Javeria", 40, 250000);
const instructor2 = new Instructor("zia", 35, 1500000);
const course1 = new Course(1, "Software Development");
const course2 = new Course(2, "Computer Security and Networks");
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourses(course1);
student2.registerForCourses(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(student1.getName());
console.log(student2.courses);
console.log(instructor1.courses);
console.log(department1.courses);
export {};

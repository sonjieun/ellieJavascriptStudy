class Student {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        //this.fullName=`${this.lastName} ${this.firstName}`;
    }
    //접근자 프로포티
    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value){
        console.log(value);
    }
}

const student = new Student('지은','손');
console.log(student.firstName);
student.firstName='지선';
console.log(student.fullName); //get호출

student.fullName='금동우';
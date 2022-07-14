class Animal{
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('냠냠');
    }
    sleep(){
        console.log('쿨쿨');
    }
}

class Tiger extends Animal {}

const animal = new Animal('노랑이');

console.log(Tiger);
animal.sleep();
animal.eat();

class Dog extends Animal {
    constructor(color, ownerName){
        //super 부모 생성자 Animal color
        super(color);
        this.ownerName=ownerName;
    }
    play() {
        console.log('꿀잼');
    }
    //오버라이딩
    eat(){
        super.eat();
        console.log('강아지 냠냠');;
    }
}

const dog = new Dog('빨강이','지은');


console.log(dog);
dog.sleep();
dog.eat();
dog.play();

// class Tiger{
//     constructor(color){
//         this.color=color;
//     }
//     eat(){
//         console.log('냠냠');
//     }
//     sleep(){
//         console.log('쿨쿨');
//     }
// }

// class Dog{
//     constructor(color){
//         this.color=color;
//     }
//     eat(){
//         console.log('냠냠');
//     }
//     sleep(){
//         console.log('쿨쿨');
//     }
//     play() {
//         console.log('꿀잼');
//     }
// }


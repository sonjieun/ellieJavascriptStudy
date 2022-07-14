class Fruit{
    
    //생성자 함수 new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,emoji){
        this.name = name;
        this.emoji= emoji;    
    };

    display = () => {
        console.log(`${this.name} ${this.emoji}`);
    };

}

// function Fruit(name,emoji) {
//     this.name = name;
//     this.emoji= emoji;
//     this.display = () => {
//         console.log(`${this.name} ${this.emoji}`);
//     };
//     //return this; //생략가능하다
// };


//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍕');
const orange = new Fruit('orange','🍔');

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name:'sonji'};


console.log(apple);
console.log(orange);
console.log(obj);
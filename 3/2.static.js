//static 정적 프로퍼티, 메서트

class Fruit{
    
    //생성자 함수 new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,emoji){
        this.name = name;
        this.emoji= emoji;    
    };
    static MAX_FRUITS = 4;
    static makeRandomFruit(){
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
        return new Fruit('banana','🍟');
    }
    
    //인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name} ${this.emoji}`);
    };
    
};

console.log(Fruit.name);
//XX Fruit.display(); XX

const banana = Fruit.makeRandomFruit();

console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple','🍕');
const orange = new Fruit('orange','🍔');

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name:'sonji'};


console.log(apple);
console.log(orange);
console.log(obj);
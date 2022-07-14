

class Counter{
    #value;
    constructor(startValue){
        if(isNaN(startValue) || startValue <0 ){
            this.#value=0;
        }else{
            this.#value=startValue;
        }
    }
    get value(){
        return this.#value;
    }
    increment=()=>{
        this.#value++;
    }
}

class Counter {
    constructor(num) {        


            this.num = num;
    }
    increment = () => {
        this.num++;
    }
}

const counter = new Counter(null);

console.log(counter.num);
counter.increment(); // 0
console.log(counter.num);
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
console.log(counter.num);
class employee{

    constructor(name,partName,partTime,money){
        this.name=name;
        this.partName=partName;
        this.partTime=partTime;
        this.money=money;
    }
    salary = () => {
        return this.partTime * this.money;
    };
}

class fullTimeEmpl extends employee{
    constructor(name,partName,partTime){
        super(name,partName,partTime,10000);
    }

    
}

class partTimeEmpl extends employee{
    constructor(name,partName,partTime){
        super(name,partName,partTime,8000);
    }
}

const fte = new fullTimeEmpl("금동우","1",10);
const pte = new partTimeEmpl("손지은","2",5);

console.log(fte.salary());
console.log(pte.salary());
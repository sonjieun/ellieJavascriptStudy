const x =0;
const y =0;

const coordinate = {x,y};//{x:x, y:y};

console.log(coordinate);

function makeObj(name, age) {
    return {
        name,//name:name,
        age,//age:age,
    }
}

const readObj = makeObj('name',20);

console.log(readObj);
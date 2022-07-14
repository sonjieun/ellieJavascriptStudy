const obj ={
    name : '손지',
    age : 27,
    //ket : 20,
};

//정적
obj.nema;
obj.age;

//동적
function getValue(obj,key) {
    return obj[key];
}

console.log(getValue(obj, 'age'));
console.log(obj);

function addKey(obj,key,value) {
    obj[key]=value;
}

addKey(obj,'job','engineer');
console.log(obj);

function deleteKey(obj,key) {
    delete obj[key];
}

deleteKey(obj,'job');
console.log(obj);
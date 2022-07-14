const obj = {
    name: '엘리',
    age: 20,
    //key:20,
}

obj.name;
obj.age;

function getValue(obj, key) {
    return obj[key];
}

console.log(getValue(obj,'name'));
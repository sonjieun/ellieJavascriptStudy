let apple={
    name:'apple',
    'hello-bye':'👩',
    0:1,
    ['hello-bye1']:'👩',
};

//속성에 데이터에 접근하기 위해서는
console.log(apple.name);
console.log(apple['name']);
console.log(apple['hello-bye1']);

apple.emoji='🍎'

console.log(apple.emoji);
console.log(apple['emoji']);

delete apple.emoji;
console.log(apple);

console.log(apple.emoji);
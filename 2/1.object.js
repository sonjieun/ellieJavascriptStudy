let apple={
    name:'apple',
    'hello-bye':'π©',
    0:1,
    ['hello-bye1']:'π©',
};

//μμ±μ λ°μ΄ν°μ μ κ·ΌνκΈ° μν΄μλ
console.log(apple.name);
console.log(apple['name']);
console.log(apple['hello-bye1']);

apple.emoji='π'

console.log(apple.emoji);
console.log(apple['emoji']);

delete apple.emoji;
console.log(apple);

console.log(apple.emoji);
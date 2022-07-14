
const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);

//지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기

const num3 = 1002;
console.log(num3.toExponential());


//반올립하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));
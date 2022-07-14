// let array = new Array(2);
// console.log(array);

// array = new Array(1,2,3);
// console.log(array);

// array = Array.of(1,2);
// console.log(array);

// const anotherArray = [1,2,3,4,5];
// console.log(anotherArray);

// array = Array.from('text');
// console.log(array);


// const fruits =['1','2','3','4'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits.length);

const input = ['🍌','🍓','🍇','🍓']
// const output = ['🍌','🥝','🍇','🥝']

function change(input) {
    const output = Array.from(input);
    for (let i = 0; i < input.length; i++) {
        if(output[i]==='🍓'){
            output[i]='🥝'
        }
    }
    return output;
}

const result = change(input);
console.log(result);


function iterate(max, action) {
    for(let i=1; i<=max; i++){
        action(i);
    }
}

function log(num) {
    console.log(num);
}

function doubleAndLog(num) {
    console.log(num*2);
}

iterate(6,log);

//iterate(3,doubleAndLog);

setTimeout(()=>{
    console.log('3');
}, 3000);
const text = 'Hello World!';

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

const ids ='user1, user2, user3, user4';

console.log(ids.split(', '));




function timeId() {
    const date = new Date();
    console.log(date.toLocaleString('ko-KR'));
  }
  setInterval(timeId, 1000);


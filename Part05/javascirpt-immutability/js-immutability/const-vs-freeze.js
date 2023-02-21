// const-vs-freeze.js
const o1 = { name: 'kim' };
Object.freeze(o1);

const o2 = { name: 'kim' };
// o1 = o2; // const가 관여 // 이름을 규제

o1.name = 'lee'; // freeze가 관여 // 값을 규제
console.log(o1);

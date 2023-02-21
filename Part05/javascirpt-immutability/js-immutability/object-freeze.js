// https://youtu.be/J0R1D2_WHnc
var o1 = { name: 'kim', score: [1, 2] };
Object.freeze(o1); // 못바꾸게 얼려버림😄, freeze푸는 명령 없음, 풀려면 복제해서 풀어야함.
Object.freeze(o1.score);
o1.name = 'lee';
o1.city = 'seoul'; // 객체 추가도 못함.

try {
  o1.score.push(3);
} catch (e) {
  console.log('[예외발생] freeze된 객체에 push()하려해서 오류');
}

console.log(o1); // { name: 'kim', score: [ 1, 2 ] }

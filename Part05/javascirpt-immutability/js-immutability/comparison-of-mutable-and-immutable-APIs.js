// https://youtu.be/ekCb6ta9AW0
var score = [1, 2, 3];

score.push(4); // 원본 바꿈.

console.log(score); // [ 1, 2, 3, 4 ]

var score2 = [...score, 5];
console.log(score, score2); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 5 ]

var score3 = score.concat(5);
console.log(score, score3); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 5 ]

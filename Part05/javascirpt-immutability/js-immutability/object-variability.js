var p1 = 1;
var p2 = 1;
var p3 = p1;
var p3 = 2;

console.log(p1, p3); // 1, 2

var o1 = { name: 'kin' };
var o2 = { name: 'kin' };
var o3 = o1;
o3.name = 'lee';

console.log(o1, o3); // { name: 'lee' } { name: 'lee' }

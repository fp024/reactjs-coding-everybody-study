var o1 = { name: 'kin' };
var o2 = Object.assign({}, o1);

console.log(o1, o2, o1 === o2); // { name: 'kin' } { name: 'kin' } false

o2.name = 'lee';

console.log(o1, o2); // { name: 'kin' } { name: 'lee' }

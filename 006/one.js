const profile = require('./two');

console.log(profile.name);
console.log(profile.age);
profile.addAge();
profile.addAge();
// console.log(profile.age); // 이렇게 출력하면 증가 안됨
console.log(profile.getAge());
let name = 'weniv';
let age = 10;
function addAge(){
    age += 1;
}
function getAge(){
    return age;
}

module.exports.name = name; // 0. 모듈 생략 가능
// 1. 컨트롤 눌러서 module 클릭도 해보시고
// 2. console.log(module)해서 찍어보세요.
module.exports.age = age;
module.exports.addAge = addAge;
module.exports.getAge = getAge;
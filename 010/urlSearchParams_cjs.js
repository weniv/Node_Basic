const { URLSearchParams } = require('url');

const params = new URLSearchParams('?key1=value1&key2=value2');

console.log(params.get('key1'));
// value1
console.log(params.get('key2'));
// value2
console.log('hello world');
// hello world

console.log('hello %s', 'weniv');
// hello weniv

console.error(new Error('Error occurs!'));
// error message and stack trace to stderr:
// Error: Error occurs!
// at [eval]:5:15
// ...

const warn = 'watch out';
console.warn(`Hey ${warn}!`);
// Hey watch out!
console.log('Before');

setImmediate((arg) => {
	console.log(`immediatly now: ${arg}`);
}, 'this!');

console.log('After');
// Before
// After
// immediatly now: this!
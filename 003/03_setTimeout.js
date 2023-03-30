function myTimer(arg) {
	console.log(`arg was => ${arg}`);
}

setTimeout(myTimer, 1500, 'this!');
// arg was => this!
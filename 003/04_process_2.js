import { argv } from 'node:process';

argv.forEach((val, idx) => {
	console.log(`${idx}: ${val}`);
});

/*
$ node process-argv.js one two=three four
0: /usr/local/bin/node    node.exe이 실행되는 경로
1: one                    현재 실행되는 프로세스 경로
2: two=three              넘겨준 매개변수 할당
3: four                   넘겨준 매개변수 할당
*/
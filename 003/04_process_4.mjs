import process from 'node:process';

if (error()) {
	printUsageToStdout();
	process.exitCode = 1;
}
import { exit } from 'node:process';

if (error()) {
	printUsageToStdout();
	exit(1);
}
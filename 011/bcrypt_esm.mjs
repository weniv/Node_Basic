import bcrypt from 'bcrypt';

const saltRounds = 10;
const myPlainTextPassword = 'password';

(async () => {
	const hash = await bcrypt.hash(myPlainTextPassword, saltRounds);
	console.log(hash);

	const result = await bcrypt.compare(myPlainTextPassword, hash);
	console.log(result);
})();
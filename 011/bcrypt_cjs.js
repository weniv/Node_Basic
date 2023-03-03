const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlainTextPassword = 'password';
const hash = bcrypt.hashSync(myPlainTextPassword, saltRounds);

console.log(hash);
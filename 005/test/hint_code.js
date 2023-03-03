const fs = require('fs');

fs.readFile('./user.csv', 'utf8', (err, csvdata) => {
        // console.log(err);
        console.log(csvdata.split('\r\n'));
})
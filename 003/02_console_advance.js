const fs = require('fs');
const path = require('path');

function makeErrorLog(errorFilePath) {
    const stream = fs.createWriteStream(errorFilePath, { flags: 'a' });

    return function errorLog(err) {
        const now = new Date();
        const timestamp = now.toISOString();
        const formattedError = `[${timestamp}] ${err.stack || err}\\n`;

        stream.write(formattedError);
        console.error(formattedError.trim());
    };
}

const errorFilePath = path.join(__dirname, 'error.log');
const errorLogger = errorLog(errorFilePath);

try {
    throw new Error('Error coccurs!');
} catch (err) {
    errorLogger(err);
}
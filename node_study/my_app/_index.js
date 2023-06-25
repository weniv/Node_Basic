import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello index.mjs');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('allah rasol, Ya allah Ya mohammand . allah is the best and mohammad sallallaho alywasallam is the best!\n Ya allah Ya mohammad \n Ya allah Ya Nabi a m');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

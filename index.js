const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const name = query.name || 'Node';
  
  // Vulnerable to XSS attacks since input is not sanitized
  res.statusCode = 200;
  const msg = `Hello ${name}!\n`; 
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

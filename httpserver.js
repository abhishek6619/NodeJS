const http = require("http");
const { url } = require("inspector");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1> This is Abhishek Kr Singh</h1> <p>Hey this is the way to learn any language!</p>"
  );
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

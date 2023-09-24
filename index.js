/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

//---Dependencies----------------------------------------------------
const http = require("http");
const url = require("url");

//---app object - module scaffolding------
const app = {};

//---configuration----------------------------------------------------
app.config = {
  port: 3000,
};

//----Create server----------------

app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.port, () => {
    console.log("server listening on port " + app.config.port);
  });
};

//----handle request response--------------------------------
app.handleRequest = (req, res) => {
  // request handle
  // get the url and parse it...
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace();
  console.log(path);

  // response handle
  res.write("hello world");
  res.end("i am going to much more pain, Allah save me");
};

app.createServer();

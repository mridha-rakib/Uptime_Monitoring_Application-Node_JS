/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

//---Dependencies----------------------------------------------------
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");
const { handleReqRes } = require("./helpers/handleReqRes");

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

//------response/request handlers --------------------------------
app.handleReqRes = handleReqRes;

//----handle request response--------------------------------
app.app.createServer();

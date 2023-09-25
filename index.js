/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

//---Dependencies----------------------------------------------------
const http = require("http");
const environment = require("./helpers/environments");
const { handleReqRes } = require("./helpers/handleReqRes");

//---app object - module scaffolding------
const app = {};

//----Create server----------------

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log("server listening on port " + environment.port);
  });
};

//------response/request handlers --------------------------------
app.handleReqRes = handleReqRes;

//----handle request response--------------------------------
app.createServer();

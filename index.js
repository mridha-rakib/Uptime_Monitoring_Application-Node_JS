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
const data = require("./lib/data");

//---app object - module scaffolding------
const app = {};

// testing file system....
// pore muche dibo...
// data.create(
//   "test",
//   "newFile",
//   { name: "Bangladesh", language: "Bengali" },
//   (err) => {
//     console.log("error was", err);
//   }
// );

// data.read("test", "newFile", (err, result) => {
//   console.log(err, result);
// });

//----Create server----------------

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log("server listening on port " + environment.port);
  });
};

//-------------response/request handlers --------------------------------
app.handleReqRes = handleReqRes;

//--------------handle request response-------------------------------
app.createServer();

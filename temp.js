// /*
//  * Title: Uptime Monitoring Application
//  * Description: A RESTFUL API to monitor up or down time of user defined links
//  * Author Name: Rakib Mahmud Mridha
//  * Date: 2023
//  */

// //---Dependencies----------------------------------------------------
// const http = require("http");

// //---app object - module scaffolding------
// const app = {};

// //---configuration----------------------------------------------------
// app.config = {
//   port: 3000,
// };

// //----Create server----------------

// app.createServer = () => {
//   const server = http.createServer(app.handleRequest);
//   server.listen(app.config.port, () => {
//     console.log("server listening on port " + app.config.port);
//   });
// };

// //----handle request response--------------------------------
// app.handleRequest = (req, res) => {
//   // response handle
//   res.write("hello world");
//   res.end("i am going to much more pain, Allah save me");
// };

// app.createServer();

//---------------part-2----------
/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

//---Dependencies----------------------------------------------------
// const http = require("http");
// const url = require("url");
// const { StringDecoder } = require("string_decoder");

// //---app object - module scaffolding------
// const app = {};

// //---configuration----------------------------------------------------
// app.config = {
//   port: 3000,
// };

// //----Create server----------------

// app.createServer = () => {
//   const server = http.createServer(app.handleRequest);
//   server.listen(app.config.port, () => {
//     console.log("server listening on port " + app.config.port);
//   });
// };

//----handle request response--------------------------------
// app.handleRequest = (req, res) => {
//   // request handle
//   // get the url and parse it...
//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;
//   const trimmedPath = path.replace(/^\s+|\s+$/g, "");
//   // console.log(trimmedPath);
//   const method = req.method.toLowerCase();
//   const queryStringObj = parsedUrl.query;
//   // console.log(queryStringObj);
//   const headersObj = req.headers;
//   // console.log(headersObj);

//   const decoder = new StringDecoder("utf-8");
//   let realData = "";
//   req.on("data", (buffer) => {
//     realData += decoder.write(buffer);
//   });

//   req.on("end", () => {
//     realData += decoder.end();
//     console.log(realData);
//     // response handle
//     res.end("hello world");
//   });
// };

// app.createServer();

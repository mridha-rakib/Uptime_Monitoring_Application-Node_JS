/*
 * Title: Response/ Request handlers
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

//---dependencies--------------------------------
// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");
const { parseJSON } = require("./utilities");

// modue scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  req.on("data", (buffer) => {
    console.log("received data");
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    console.log("Requested ended");
    realData += decoder.end();
    // console.log("Requested data: " + realData);
    requestProperties.body = parseJSON(realData);
    // console.log("Requested firstName: ", requestProperties.body.firstName);
    // try {
    //   requestProperties.body = parseJSON(realData);
    // } catch (error) {
    //   console.log("Error parsing JSON:", error);
    //   requestProperties.body = {}; // Default to an empty object in case of an error
    // }

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      // return the final response
      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

module.exports = handler;

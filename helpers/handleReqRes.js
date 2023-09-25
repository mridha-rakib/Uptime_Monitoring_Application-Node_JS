/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

// -- module scaffolding --------------------------------
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handle
  // get the url and parse it...
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\s+|\s+$/g, "");
  // console.log(trimmedPath);
  const method = req.method.toLowerCase();
  const queryStringObj = parsedUrl.query;
  // console.log(queryStringObj);
  const headersObj = req.headers;
  // console.log(headersObj);

  const decoder = new StringDecoder("utf-8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    // response handle
    res.end("hello world");
  });
};

// export --------------------------------
module.exports = handler;

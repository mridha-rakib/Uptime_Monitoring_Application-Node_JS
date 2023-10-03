/*
 * Title: routes
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

//===dependencies================================
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");
const { userHandler } = require("./handlers/routeHandlers/userHandler");
const { tokenHandler } = require("./handlers/routeHandlers/tokenHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
  token: tokenHandler,
};

module.exports = routes;

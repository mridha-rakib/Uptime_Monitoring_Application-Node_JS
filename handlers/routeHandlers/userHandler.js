/*
 * Title: user handlers
 * Description: user handlers
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

// === module scaffolding======
const handler = {};

handler.userHandler = (requestProperties, callback) => {
  const acceptedMethods = ["get", "post", "put", "delete"];

  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._users[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
  typeof requestProperties.body.firstName === "string" &&
  requestProperties.body.firstName.trim().length > 0
    ? requestProperties.body.firstName
    : false;
};
handler._users.get = (requestProperties, callback) => {
  callback(200);
};
handler._users.put = (requestProperties, callback) => {};
handler._users.delete = (requestProperties, callback) => {};

module.exports = handler;

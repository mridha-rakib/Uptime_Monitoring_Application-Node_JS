/*
 * Title: Token Handler
 * Description: Handler to handle token related routes
 * Author: Rakib Mridha
 * Date:
 *
 */
/*
  handler = {
    _token: {
      post: (requestProperties, callback) => {},
    },
  };
  handler._token.post = () => {};
 */

// dependencies
const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const { createRandomString } = require("../../helpers/utilities");
const { parseJSON } = require("../../helpers/utilities");

// module scaffolding
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
  const acceptedMethods = ["get", "post", "put", "delete"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._token[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._token = {};

handler._token.post = (requestProperties, callback) => {
  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone
      : false;

  const password =
    typeof requestProperties.body.password === "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;
  if (phone && password) {
    data.read("users", phone, (err1, userData) => {
      const hashedPassword = hash(password);
      if (hashedPassword === parseJSON(userData).password) {
        const tokenId = createRandomString(20);
        const expires = Date.now() + 60 * 60 * 1000;
        const tokenObject = {
          phone,
          id: tokenId,
          expires,
        };

        // store the token
        data.create("tokens", tokenId, tokenObject, (err2) => {
          if (!err2) {
            callback(200, tokenObject);
          } else {
            callback(500, {
              error: "There was a problem in the server side!",
            });
          }
        });
      } else {
        callback(400, {
          error: "Password is not valid!",
        });
      }
    });
  } else {
    callback(400, {
      error: "You have a problem in your request",
    });
  }
};

handler._token.get = (requestProperties, callback) => {
  const id =
    typeof requestProperties.queryStringObject.id === "string" &&
    requestProperties.queryStringObject.id.trim().length === 20
      ? requestProperties.queryStringObject.id
      : false;

  if (id) {
    // lookup the token
    data.read("tokens", id, (err, tokenData) => {
      const token = { ...parseJSON(tokenData) };
      if (!err && token) {
        callback(200, token);
      } else {
        callback(404, {
          error: "Requested token was not found!",
        });
      }
    });
  } else {
    callback(404, {
      error: "Requested token was not found",
    });
  }
};

module.exports = handler;

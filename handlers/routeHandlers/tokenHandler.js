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

  // lib.read = (dir, file, callback) => {
  //   fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
  //     callback(err, data);
  //   });
  // };
  if (phone && password) {
    data.read("users", phone, (err1, userData) => {
      const hashedPassword = has(password);
      if (hashedPassword === parseJSON(userData).password) {
        console.log(
          "hash pass: " + hashedPassword,
          +"u pss: " + parseJSON(userData).password
        );

        const tokenID = createRandomString(20);
        const expires = Date.now() + 60 * 60 * 1000;
        const tokenObject = {
          phone,
          id: tokenID,
          expires,
        };

        data.crate("tokens", tokenID, tokenObject, (err2) => {
          if (!err2) {
            callback(200, tokenObject);
          } else {
            callback(500, {
              error: "There was a problem in the server side",
            });
          }
        });
      } else {
        callback(400, {
          error: "password is not valid.",
        });
      }
    });
  } else {
    callback(400, {
      error: "You have a problem in your request.",
    });
  }
};

module.exports = handler;

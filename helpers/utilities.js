/*
 * Title: Utilities
 * Description: Important utility functions
 * Author: Rakib
 * Date: 2023
 *
 */

// dependencies

// module scaffolding
const crypto = require("crypto");

const utilities = {};
const environments = require("./environments");

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
  let output;
  try {
    output = JSON.parse(jsonString);
  } catch (error) {
    console.log("Error parsing JSON:", error);
    output = {};
  }
  // console.log(output);
  return output;
};

// hash string
utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    console.log(environments, process.env.NODE_ENV);
    const hash = crypto
      .createHmac("sha256", environments.secretKey)
      .update(str)
      .digest("hex");
    return hash;
  }
  return false;
};

utilities.createRandomString = (strLen) => {
  const length = typeof strLen === "number" && strLen > 0 ? strLen : false;

  if (!length) {
    return false;
  }

  const possibleCharacters = "abcdefghijklmnopqrstuvwxyz1234567890";
  let output = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    output += possibleCharacters.charAt(randomIndex);
  }

  return output;
};

// export module
module.exports = utilities;

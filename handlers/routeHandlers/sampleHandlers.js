/*
 * Title: sample handlers
 * Description: sample handlers
 * Author Name: Rakib Mahmud Mridha
 * Date: 2023
 */

// === module scaffolding======
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;

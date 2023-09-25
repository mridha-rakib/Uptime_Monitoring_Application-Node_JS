//=======data.js======

// dependencies

const fs = require("fs");
const path = require("path");

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file
lib.create = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to stirng
      const stringData = JSON.stringify(data);

      // write data to file and then close it
      fs.writeFile(fileDescriptor, stringData, (err2) => {
        if (!err2) {
          fs.close(fileDescriptor, (err3) => {
            if (!err3) {
              callback(false);
            } else {
              callback("Error closing the new file!");
            }
          });
        } else {
          callback("Error writing to new file!");
        }
      });
    } else {
      callback("There was an error, file may already exists!");
    }
  });
};

lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};

// export
module.exports = lib;

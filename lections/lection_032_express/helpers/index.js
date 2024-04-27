const fs = require("fs");

function readFile({ url, callback }) {
  return fs.readFile(url, "utf-8", callback);
}

function writeFile({ url, data, error }) {
  if (!data) return null;

  return fs.writeFile(url, JSON.stringify(data), error);
}

module.exports = {
  readFile,
  writeFile,
};

const fs = require("fs");

module.exports = { readFile };

function readFile(name) {
  try {
    let data = fs.readFileSync(name, "utf8");
    data = JSON.parse(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

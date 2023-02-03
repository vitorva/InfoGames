const fs = require("fs");

export function getContentFile(filename) {
  var file_content = fs.readFileSync(filename);
  const content = JSON.parse(file_content);
  return content;
}

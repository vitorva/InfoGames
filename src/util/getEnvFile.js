const fs = require("fs");

export function getEnvFile() {
  const filename = ".env";
  var file_content = fs.readFileSync(filename);
  const content = JSON.parse(file_content);
  return content;
}

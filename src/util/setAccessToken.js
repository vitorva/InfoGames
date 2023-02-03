import { getContentFile } from "./getContentFile";
const fs = require("fs");

export function setAccessToken(access_token, filename) {
  const content = getContentFile(filename);

  content.access_token = access_token;
  fs.writeFileSync(filename, JSON.stringify(content));
}
